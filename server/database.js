var mysql = require('mysql');
var connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'test',
  database: 'project'
});
module.exports = connection;
