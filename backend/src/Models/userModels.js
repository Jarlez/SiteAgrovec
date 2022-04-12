const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
  async checkUserAlready(data) {
    const userAlready = await connection('users').where('email', data).first();

    return userAlready ? true : false
  },

  async registerUser(data) {
    const {
      name,
      email,
      password,
      cpf,
      address,
      zipCode,
      city,
      uf, 
      salt
    } = data;
    
    await connection('users').insert({
      name,
      email,
      password,
      cpf,
      address,
      zipCode,
      city,
      uf,
      salt
    });
  },

  async login(data) {
    const userAlready = await connection('users')
      .where('email', data.email)
      .first();

    const descryptedPassword = await this.hash(data.password, userAlready.salt);

    const sessionToken = crypto.randomBytes(32).toString('HEX');

    if(userAlready.password === descryptedPassword.hash) {
      const { id, name } = userAlready;
      return { id, name, sessionToken };
    }

    return false;
  },

  async profile(data) {
    const user = await connection('users').select().where('id', data).first();
    
     return user ? user : false
  },

  async salt(length) {
    const salt = crypto.randomBytes(Math.ceil(length/2))
      .toString('hex')
      .slice(0, 16);

    return salt;
  },

  async hash(password, salt) {
    let hash = crypto.createHmac('sha512', salt)
    hash.update(password);
    hash = hash.digest('hex');
    return { salt, hash }
  },

  async encryptPassword(password) {
    let salt = await this.salt(16);
    let encrypted = await this.hash(password, salt)
    return { encrypted }
  },
}