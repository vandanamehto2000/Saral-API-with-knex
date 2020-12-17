const knex = require('../connection/knex_connection')
const jwt = require('jsonwebtoken')

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

module.exports = (Router) => {
    Router.delete('/delete/courses/:id', (req, res) => {
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
                .delete()
                .then((result) => {
                    res.send('deleted..')
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