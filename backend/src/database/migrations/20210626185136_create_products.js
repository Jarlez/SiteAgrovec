
exports.up = function(knex) {
  return knex.schema.createTable('products', (table) => {
    table.increments('id').primary();
    // table.integer('barcode').notNullable();
    table.float('weight').notNullable();
    table.string('name').notNullable();
    table.string('description').notNullable();
    table.float('price').notNullable();
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('products');
};

