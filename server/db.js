const Pool = require('pg').Pool;

const pool = new Pool({
    user:'postgres',
    password:'postgre12345',
    host:'3.109.171.18',
    port: 5432,
    database:'todo'
})

module.exports = pool;
