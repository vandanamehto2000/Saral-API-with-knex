const knex = require('../connection/knex_connection')
const jwt = require('jsonwebtoken')
const { Router } = require('express')

module.exports = (Router) => {
    Router.post('/login', (req, res) => {
        knex.select('name', 'description').from('courses').where('name', req.body.name)
        .then((data) => {
            // console.log(data)
            if(data.length != 0){
                const token = jwt.sign(req.body, 'secretKey')
                res.cookie(token)
                console.log({msg: '........youn have logged in successfully...........', token: token})
                res.json({msg: '........youn have logged in successfully...........', token: token})
            }
            else{
                console.log('your description or name is wrong')
                res.send('your description or name is wrong')
            }
        })
        .catch((err) => {
            console.log(err)
            res.send(err)
        })
    })
}

