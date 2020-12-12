const knex = require('../connection/knex_connection')
const fs = require('fs')


module.exports = (Router) => {
    Router.put('/update/courses/:id', (req, res) => {
        knex('courses')
        .where('id', req.params.id)
        .update({
            name: req.body.name,
            description: req.body.description
        })
        .then((result) => {
            console.log(result)
            res.send('updated courses..')
        })
        .catch((err) => {
            res.send(err)
        })

    })
}