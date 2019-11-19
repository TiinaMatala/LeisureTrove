var db = require('../database');
const bcrypt = require('bcryptjs');
const saltRounds = 4;



var users = {
  get: function(callback) {
    return db.query('select * from users', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from users where id=?', [id], callback);
  },
  add: function( users , callback) {
    bcrypt.hash(users.password, saltRounds).then(hash =>
      db.query('INSERT INTO users (name, email, password) VALUES (?,?,?)', [users.name, users.email, hash])
    )
    .then(dbResults => {
        console.log(dbResults);
        //res.sendStatus(201);
        
    })
    .catch(error => res.sendStatus(500));
    callback
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
  },
  login: function( email , callback) {
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
  }
};
module.exports = users ;