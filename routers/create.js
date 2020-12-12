const knex = require('../connection/knex_connection')
const fs = require('fs')
const courses = require('./courses')
const exercise = require('./exercise')
// const { Router } = require('express')

module.exports = (Router) => {
    // posting the course data on database
    Router.post('/courses', (req, res) => {
        // var file = JSON.parse(fs.readFileSync('//home/navgurukul/Desktop/Saral_Api/file.txt'))
        // for(Course of file){
            var dictOfCourse = {
                id: req.body.id,
                name: req.body.name,
                description: req.body.description
            }
        // }
        knex('courses').insert(dictOfCourse)
        .then((listOfCourses) => {
            listOfCourses.push(dictOfCourse)
            console.log(listOfCourses)
            res.send(listOfCourses)
        })
        .catch((err) => {
            console.log(err)
            res.send(err)
        })
      
    })

    .get('/get/courses', (req, res) => {
        knex.select('*').from('courses').then((data) => {
            res.send(data)
        })
    })

    .get('/get/courses/:id', (req, res) => {
        var id = req.params.id
        knex.select('*').from('courses')
        .where('courses.Id', id)
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            res.send(err)
        })
    })
    
    .post('/exercise', (req, res) => {
        var dictOfCourse = {
            id: req.body.id,
            course_id: req.body.course_id,
            name: req.body.name,
            description: req.body.description
        }
        knex('exercise').insert(dictOfCourse)
        .then((listOfExercises) => {
            listOfExercises.push(dictOfCourse)
            console.log(listOfExercises)
            res.send(listOfExercises)
        })
        .catch((err) => {
            console.log(err)
            res.send(err)
        })
    })


    .post('/chapter', (req, res) => {
        var dictOfChapter = {
            id: req.body.id,
            courseid: req.body.courseid,
            username: req.body.username,
            usersubmissions: req.body.usersubmissions
        }
        knex('chapter').insert(dictOfChapter)
        .then((listOfChapter) => {
            listOfChapter.push(dictOfChapter)
            console.log(listOfChapter)
            res.send(listOfChapter)
        })
        .catch((err) => {
            console.log(err)
            res.send(err)
        })
    })
}


       