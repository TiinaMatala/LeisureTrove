var db = require('../database');
  var activities = {
    get: function(callback) {
      return db.query('select * from activities', callback);
    },
    getById: function(id, callback) {
      return db.query('select * from activities where act_id=?', [id], callback);
    },
    add: function(activities, callback) {
      return db.query(
        'insert into activities values(?,?,?,?,?,?)',
        [activities.act_id, activities.name, activities.location, activities.price, activities.max_places, activities.act_info],
        callback
      );
    },
    delete: function(id, callback) {
      return db.query('delete from activities where act_id=?', [id], callback);
    },
    update: function(id, activities, callback) {
      return db.query(
        'update activities set name=?,location=?, price=?, max_places=?, act_info=? where act_id=?',
        [activities.name, activities.location, activities.price, activities.max_places, activities.act_info, id],
        callback
      );
    }
  };
  module.exports = activities;