var db = require('../database');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const saltRounds = 4;

var users = {
  get: function(callback) {
    return db.query('select * from users', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from users where id=?', [id], callback);
  },
  add: function( users , callback) {
    return db.query(
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
    }
    );
  },
  delete: function(id, callback) {
    return db.query('delete from users where id=?', [id], callback);
  },
  update: function(id, users, callback) {
    return db.query(
      'update users set name=?,email=?, password=? where id=?',
      [users.name, users.email, users.password, id],
      callback
    );
  }
};
module.exports = users ;