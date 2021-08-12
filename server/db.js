const Pool = require('pg').Pool;

const pool = new Pool({
    user:'postgres',
    password:'postgre12345',
    host:'postgre.cqf96d2qobjy.ap-south-1.rds.amazonaws.com',
    port: 5432,
    database:'todo'
})

module.exports = pool;
