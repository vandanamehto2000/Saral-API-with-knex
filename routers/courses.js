const fs = require('fs');   
const knex= require('../connection/knex_connection')

module.exports=(Router)=>{
    Router.get('/courses',(req,res)=>{
        var file = JSON.parse(fs.readFileSync('//home/navgurukul/Desktop/Saral_Api/file.txt'))
        knex.select('*').from('courses')
        .then((listOfCourses) => {
            // empty object
            // console.log(listOfCourses)
            for(Course of file){
                // course and exercise both are coming
                // console.log(Course)
                var dictOfCourse = {}
                dictOfCourse['id'] = Course.id,
                dictOfCourse['name'] = Course.name,
                dictOfCourse['description'] = Course.description
                // whole course name is coming
                // console.log(dictOfCourse)
                listOfCourses.push(dictOfCourse)
            }
            console.log(listOfCourses)
            res.send(listOfCourses)
        })
        .catch((err) => {
            console.log(err)
            res.send(err)
        })
    })


// by id we will get course
    .get('/courses/:id', (req, res) => {
        var file = JSON.parse(fs.readFileSync('//home/navgurukul/Desktop/Saral_Api/file.txt'))
        knex.select('*').from('courses')
        .then((listOfCourses) => {
            for(Course of file){
                if(Course.id == req.params.id){
                    var dictOfCourse = {}
                    dictOfCourse['id'] = Course.id,
                    dictOfCourse['name'] = Course.name,
                    dictOfCourse['description'] = Course.description
                    listOfCourses.push(dictOfCourse)

                }
            }
            console.log(listOfCourses)
            res.send(listOfCourses)
        })
        .catch((err) => {
            console.log(err)
            res.send(err)
        })
    })
}
