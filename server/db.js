const Pool = require('pg').Pool;

const pool = new Pool({
    user:'postgres',
    password:'962239',
    host:'13.233.93.103',
    port: 5432,
    database:'todo'
})

module.exports = pool;
