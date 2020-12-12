const knex = require('../connection/knex_connection')
const fs = require('fs')

module.exports = (Router) => {
    // whole chapters are coming
    Router.get('/chapter', (req, res) => {
        var file = JSON.parse(fs.readFileSync('//home/navgurukul/Desktop/Saral_Api/file.txt'))
        knex.select('*').from('chapter')
        .then((listOfChapters) => {
            for(Course of file){
                for(subCourse of Course.submission){
                    // exercise and chapter withemail id is coming
                    // console.log(subCourse)
                    for(UserSummision of subCourse.usersummision){
                        // chapters are coming
                        // console.log(UserSummision)
                        listOfChapters.push(UserSummision)
                    }
                }
            }
            console.log(listOfChapters)
            res.send(listOfChapters)
        })
        .catch((err) => {
            console.log(err)
            res.send(err)
        })

    })


    // now we will get chapters by id or course id
    .get('/chapter/:id', (req, res) => {
        var file = JSON.parse(fs.readFileSync('//home/navgurukul/Desktop/Saral_Api/file.txt'))
        knex.select('*').from('chapter')
        .then((listOfChapters) => {
            for(Course of file){
                if(Course.id == req.params.id){
                    for(subCourse of Course.submission){
                        for(UserSummision of subCourse.usersummision){
                            listOfChapters.push(UserSummision)
                        }
                    }
                }
            }
            console.log(listOfChapters)
            res.send(listOfChapters)

        })
        .catch((err) => {
            console.log(err)
            res.send(err)
        })
        
    })
}