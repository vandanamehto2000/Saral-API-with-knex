const knex = require('../connection/knex_connection')
const fs = require('fs')

module.exports = (Router) => {

    // Whole chapters are coming
    Router.get('/chapter', (req, res) => {
        var file = JSON.parse(fs.readFileSync('//home/navgurukul/Desktop/Saral_Api/file.txt'))
        knex.select('*').from('chapter')
        .then((listOfChapters) => {
            for(Course of file){
                for(subCourse of Course.submission){
                    // console.log(subCourse)
                    for(UserSummision of subCourse.usersummision){
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

    // chapter are coming by id
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