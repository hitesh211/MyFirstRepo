const Pool = require('pg').Pool;

const pool = new Pool({
    user:'postgre',
    password:'hbzBgapZZwWBIPePPFiK',
    host:'database-2.c9lrifpmvcx4.ap-south-1.rds.amazonaws.com',
    port: 5432,
    database:'todo'
})

module.exports = pool;
