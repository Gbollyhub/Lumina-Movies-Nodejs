//packages import
const mysql = require('mysql2')

//node mysql connection
const connectionPool = mysql.createPool({
    connectionLimit: 10,
    password: process.env.MYSQL_PASSWORD,
    user: process.env.MYSQL_USER,
    database: process.env.MYSQL_DATABASE,
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT
})

//mysql connection export
module.exports = connectionPool;