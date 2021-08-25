const Pool = require('pg').Pool;

const pool = new Pool({
    user:'postgres',
    password:'postgre12345',
    host:'13.235.133.111',
    port: 5432,
    database:'todo'
})

module.exports = pool;
