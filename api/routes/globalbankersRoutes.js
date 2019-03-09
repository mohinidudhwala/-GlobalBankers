'use strict';
module.exports = function(app) {
  var globalbankers = require('../controllers/globalbankersController');

  // Routes
  app.route('/value')
  // .get(globalbankers.list_all_car) 
    .post(globalbankers.get_car_value);
};
