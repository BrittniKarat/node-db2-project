exports.up = async function (knex) {
  await knex.schema.createTable('cars', table => {
    table.increments('id')
    table.text('vin', 18).unique().notNullable()
    table.text('make', 30).notNullable()
    table.text('model', 30).notNullable()
    table.decimal('mileage').notNullable()
    table.text('title', 20)
    table.text('transmission', 30)
  })
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('cars')
};
