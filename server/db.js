const Pool = require('pg').Pool;

const pool = new Pool({
    user:'postgres',
    password:'postgre12345',
    host:'15.207.254.138',
    port: 5432,
    database:'todo'
})

module.exports = pool;
