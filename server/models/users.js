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
  add: function(users, callback) {

    var salt = bcrypt.genSaltSync(10);

    var hash = bcrypt.hashSync(users.password, salt);

      return db.query(

      'insert into users (name, email, password) values(?,?,?)',

      [users.name, users.email, hash],

      callback

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
  },
  login: function (email, callback) {
    return db.query('select password from users where email=?',
    [users.email, hash],
    callback
    );
   }
};
module.exports = users ;