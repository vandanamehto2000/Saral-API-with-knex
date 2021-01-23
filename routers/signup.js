const knex = require('../connection/knex_connection')

module.exports = (Router) => {
    Router.post('/signup', (req, res) => {
        knex.select('name').from('courses').where('name', req.body.name)
        .then((data) => {
            if(data.length == 0){
                // console.log(data)
                knex('courses').insert({
                    id: req.body.id,
                    name: req.body.name,
                    description: req.body.description
                })
                .then((result) => {
                    console.log("you have successfully signed in");
                    res.send("you have successfully signed in");
                })
                .catch((err) => {
                    console.log(err)
                    res.send(err)
                })
            }
            else{
                console.log(data);
                console.log("You have already signed in");
                res.send("You have already signed in");

            }
        })
        .catch((err) => {
            console.log(err)
            res.send(err)
        })

    })
}
