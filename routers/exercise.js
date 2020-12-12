const knex = require('../connection/knex_connection')
const fs = require('fs')

module.exports = (Router) => {
    // whole exercise is coming by id only
    Router.get('/courses/:id/exercise', (req, res) => {
        var file = JSON.parse(fs.readFileSync('//home/navgurukul/Desktop/Saral_Api/file.txt'))
        knex.select('*').from('exercise')
        .then((listOfExercises) => {
            for(Course of file){
                // console.log(Course)
                if(Course.id == req.params.id){
                    listOfSubCourses=[]
                    for(subCourse of Course.submission){
                        dictOfSubCourse={}
                        dictOfSubCourse['id']=subCourse.id
                        dictOfSubCourse['courseid']=subCourse.courseid
                        dictOfSubCourse['name']=subCourse.name
                        dictOfSubCourse['description']=subCourse.description
                        listOfSubCourses.push(dictOfSubCourse)
                    }
                    listOfExercises.push(listOfSubCourses)
                }
            }
            console.log(listOfExercises)
            res.send(listOfExercises)
        })
        .catch((err) => {
            console.log(err)
            res.send(err)
            
        })
    })


    // now we will get exercise by id and by course id also then we will get one specific data

    .get('/courses/:id/exercise/:courseid', (req, res) => {
        var file = JSON.parse(fs.readFileSync('//home/navgurukul/Desktop/Saral_Api/file.txt'))
        knex.select('*').from('exercise')
        .then(( listOfExercises) => {
            for(Course of file){
                // console.log(Course)
                if(Course.id == req.params.id){
                    listOfSubCourses=[]
                    for(subCourse of Course.submission){
                        if(subCourse.courseid == req.params.courseid){
                            dictOfSubCourse={}
                            dictOfSubCourse['id']=subCourse.id
                            dictOfSubCourse['courseid']=subCourse.courseid
                            dictOfSubCourse['name']=subCourse.name
                            dictOfSubCourse['description']=subCourse.description
                            // dictOfSubCourse['courseid']=subCourse.courseid
                            listOfSubCourses.push(dictOfSubCourse)
                        }
                    }
                    listOfExercises.push(listOfSubCourses)
                }
            }
            console.log(listOfExercises)
            res.send(listOfExercises)
        })
        .catch((err) => {
            console.log(err)
            res.send(err)
        })

    })
}