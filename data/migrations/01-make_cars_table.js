exports.up = function (knex) {
  await knex.schema.createTable('cars', table => {
    table.increments('car_id')
    table.text('vin', 18).unique().NotNullable()
    table.text('make', 30).NotNullable()
    table.text('model', 30).NotNullable()
    table.decimal('milage').NotNullable()
    table.text('title', 20)
    table.text('transmission', 30)
  })
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('cars')
};
