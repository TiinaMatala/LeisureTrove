var db = require('../database');
  var places = {


    getFilledPlaces: function(callback) {
      return db.query('select filled_places from activities', callback);
    }
    
  };
  module.exports = places;