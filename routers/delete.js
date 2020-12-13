const knex = require('../connection/knex_connection')

module.exports = (Router) => {
    Router.delete('/delete/course/:id', (req, res) => {
        knex('courses')
        .where('id', req.params.id)
        .delete()
        .then((result) => {
            console.log(result)
            res.send('deleted....')
        })
        .catch((err) => {
            console.log(err)
            res.send(err)
        })
    })
}