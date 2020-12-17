const knex = require('../connection/knex_connection')
const fs = require('fs')
const jwt = require('jsonwebtoken')
const auth = require('../routers/Authorize')


module.exports = (Router) => {
    Router.put('/update/update/:id', (req, res) => {
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

module.exports = (Router) => {
    Router.put('/put/courses/:id', (req, res) => {
        // var id = req.params.id
        var token = req.headers.cookie.split(' ')
        // console.log(token)
        token = token[token.length - 1].slice(0, -10)
        console.log(token)
        jwt.verify(token, 'secretKey', (err, data) => {
            if(!err){
                console.log(data)
                knex('courses')
                .where('id', req.params.id)
                .update({
                    name: req.body.name,
                    description: req.body.description
                })
                .then((result) => {
                    res.send('updated..')
                })
                .catch((err) => {
                    res.send(err)
                })
            }
            else{
                console.length(err)
                res.send(err)
            }
        })
    })

}