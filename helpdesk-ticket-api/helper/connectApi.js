const mysql = require('mysql2')
const dotenv = require('dotenv');
dotenv.config();

const pool = mysql.createPool({
    connectionLimit: 3000,
    user: process.env.DB_USERNAME,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
})

// module.exports = pool.promise()
module.exports = pool