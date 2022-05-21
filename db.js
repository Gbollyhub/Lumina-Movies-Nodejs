const mysql = require('mysql2')


const connectionPool = mysql.createPool({
    connectionLimit: 10,
    password: 'Gb$lly16',
    user: "root",
    database:"lumina",
    host: "localhost",
    port: 3306
})


module.exports = connectionPool;