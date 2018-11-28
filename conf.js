const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '*******!',
    database:'test_exton'
});

module.exports = connection;