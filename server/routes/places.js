var express = require('express');
  var router = express.Router();
  var places = require('../models/places');


router.get('/filled_places/:id?', function(req, res, next) {
  console.log("test2");
  if (req.params.id) {
    places.getFilledPlaces(req.params.id, function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  } else {
      places.getFilledPlaces(function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  }
});
  
  module.exports = router;