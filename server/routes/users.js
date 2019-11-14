var express = require('express');
var router = express.Router();
var users = require('../models/users');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const Strategy = require('passport-http').BasicStrategy;

const saltrounds = 4;

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

  app.post('/users', 
  passport.authenticate('basic', { session: false }),
  (req, res) => {
  let email = req.body.email.trim();
  let password = req.body.password.trim();

  if((typeof email === "string") &&
     (typeof password === "string"))
  {
    bcrypt.hash(password, saltRounds).then(hash =>
      db.query('INSERT INTO users (email, password) VALUES (?,?)', [email, hash])
    )
    .then(dbResults => {
        console.log(dbResults);
        res.sendStatus(201);
    })
    .catch(error => res.sendStatus(500));
  }
  else {
    console.log("incorrect email or password, both must be strings");
    res.sendStatus(400);
  }
})

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

module.exports = router;
