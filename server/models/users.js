var db = require('../database');
var users = {
  get: function(callback) {
    return db.query('select * from users', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from users where id=?', [id], callback);
  },
  add: function( users , callback) {
    return db.query(
      'insert into users values(?,?,?,?)',
      [users.id, users.name, users.email, users.password],
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
  }
};
module.exports = users ;