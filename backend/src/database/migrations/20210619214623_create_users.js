
exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable().unique();
    table.string('password').notNullable();
    table.string('cpf').notNullable();
    table.string('address').notNullable();
    table.string('zipCode').notNullable();
    table.string('city').notNullable();
    table.string('uf').notNullable();
    table.string('salt').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
