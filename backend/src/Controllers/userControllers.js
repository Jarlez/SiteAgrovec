const user = require('../Models/userModels')
module.exports = {
  async create(req, res, next) {
    const {
      name,
      email,
      password,
      cpf,
      address,
      zipCode,
      city,
      uf, 
    } = req.body;

    if(name == null, email == null, password == null, cpf == null, address == null, zipCode == null, city == null, uf == null) {
      return res.status(404).json({ error: 'Preencha todos os Campos!' });
    }

    const userAlready = await user.checkUserAlready(email);

    if(userAlready) return res.status(400).json({ error: 'Usuário já cadastrado' });

    const encrypt = await user.encryptPassword(password)
    const salt = encrypt.encrypted.salt;
    const passwordEncrypted = encrypt.encrypted.hash
    
    user.registerUser({
      name,
      email,
      password: passwordEncrypted,
      cpf,
      address,
      zipCode,
      city,
      uf, 
      salt
    });

    res.status(201).json({ msg: 'Usuário Cadastrado com Sucesso!' });
  },
}