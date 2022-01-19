// STRETCH
exports.seed = function(knex) {
    return knex('cars').truncate()
      .then(function () {
        return knex('cars').insert([
            { vin: '11111111121', make: 'Toyota', model: 'Camry', mileage: 41202, title: 'clean', transmission: 'automatic'}
        ]);
      });
  };
  