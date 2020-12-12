const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        password: 'navgurukul',
        database: 'courseOfSaralApi'
    }
})

module.exports = knex;