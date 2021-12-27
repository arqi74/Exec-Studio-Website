const mysql = require('mysql');
const mysql_c = require('../config/mysql.json');
var con = mysql.createConnection({
    host: mysql_c.host,
    user: mysql_c.user,
    password: mysql_c.password,
    database: mysql_c.database
});

module.exports = con;