const Pool = require('pg').Pool;

const pool = new Pool({
    user:'postgres',
    password:'962239',
    host:'13.234.117.77',
    port: 5000,
    database:'todo'
})

module.exports = pool;
