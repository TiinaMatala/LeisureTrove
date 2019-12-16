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
        'insert into activities values(?,?,?,?,?,?,?,?)',
        [activities.act_id, activities.name, activities.location, activities.price, activities.max_places, activities.filled_places, activities.act_info, activities.act_type],
        callback
      );
    },
    delete: function(id, callback) {
      return db.query('delete from activities where act_id=?', [id], callback);
    },
    update: function(id, activities, callback) {
      return db.query(
        'update activities set name=?,location=?, price=?, max_places=?, filled_places=?, act_info=?, act_type=? where act_id=?',
        [activities.name, activities.location, activities.price, activities.max_places, activities.filled_places, activities.act_info, activities.act_type, id],
        callback
      );
    },
    getByType:function(value,callback) {
      if (value==='all') {
        return db.query('select * from activities order by act_id asc',
        [value], callback);
      }
      else{
      return db.query('select * from activities where act_type=? order by act_id desc',
      [value], callback);
      }
    },
    
     getact:function(id,callback) {
      return db.query('select * from activities inner join act_to_user on activities.act_id=act_to_user.act_id where id=?', [id], callback);
    },

    joinUpdate:function(id, callback) {
      return db.query('update activities set filled_places = filled_places+1 where act_id=? ', [id], callback);
    },
    addUserId:function(id, callback) {
      return db.query('',[id], callback);
    },

    addAct: function(act_to_user, callback) {
      console.log('try to insert');
      console.log('act_id=',act_to_user.act_id);
      console.log('id=',act_to_user.id);
      return db.query(
        'insert into act_to_user(act_id, id) values(?,?)',
        [act_to_user.act_id, act_to_user.id], callback
      );
    }

    
  
    
  };
  module.exports = activities;