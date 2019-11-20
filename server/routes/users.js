var express = require('express');
var router = express.Router();
var users = require('../models/users');
const Strategy = require('passport-http').BasicStrategy;
const bcrypt = require('bcryptjs');
const passport = require('passport');
const saltRounds = 4;

passport.use(new Strategy((email, password, cb) => {
  db.query('SELECT id, email, password FROM users WHERE email = ?', [email]).then(dbResults => {

    if(dbResults.length == 0)
    {
      return cb(null, false);
    }

    bcrypt.compare(password, dbResults[0].password).then(bcryptResult => {
      if(bcryptResult == true)
      {
        cb(null, dbResults[0]);
      }
      else
      {
        return cb(null, false);
      }
    })

  }).catch(dbError => cb(err))
}));

router.get('/:id?', function(req, res, next) {
  if (req.params.id) {
    users.getById(req.params.id, function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  } else {
    users.get(function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  }
});

router.post('/', function(req, res, next) {
  users.add(req.body, function(err, count) {
    if (err) {
      res.json(err);
    } else {
      res.json(req.body); //or return count for 1 & 0
    }
  });
});


router.delete('/:id', 
  passport.authenticate('basic', { session: false }),
  function(req, res, next) {
  users.delete(req.params.id, function(err, count) {
    if (err) {
      res.json(err);
    } else {
      res.json(count);
    }
  });
});

router.put('/:id', 
  passport.authenticate('basic', { session: false }),
  function(req, res, next) {
  users.update(req.params.id, req.body, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.get('/login/:email',
        passport.authenticate('basic', { session: false }),
        (req, res) => {
         db.query('SELECT password FROM users WHERE email = ?', [req.params.email]).then(results => {
            res.json(results);
          })
        });

module.exports = router;
