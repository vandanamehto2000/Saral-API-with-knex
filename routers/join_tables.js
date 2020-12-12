const knex = require('../connection/knex_connection')
const fs = require('fs')
const { Router } = require('express')

module.exports = (Router) => {
    Router.get('/saral/:id', (req, res) => {
        id = req.params.id

        knex.select('*').from('courses').where('id', id).then((listOfCourses) => {
            // console.log(listOfCourses)
            if(listOfCourses.length > 0){
                knex.select('*').from('exercise').where('id', id).then((listOfExercises) => {

                    knex.select('*').from('chapter').where('id', id).then((listOfChapters) => {
                        if(listOfExercises.length > 1){
                            listOfExercises_list = []
                            for(value of listOfExercises){
                                // console.log(value)
                                if(listOfChapters.length >= 1){
                                    // console.log(listOfChapters)
                                    empty_list = []
                                    for(values of listOfChapters){
                                        // console.log(values)
                                        if(listOfChapters.courseid == value.courseid){
                                            empty_list.push(values)

                                        }
                                    }
                                    listOfChapters['chapter'] = empty_list
                                    listOfExercises_list.push(listOfChapters)
                                }
                                else{
                                    listOfExercises_list.push(listOfChapters)
                                }
                                // console.log(listOfExercises_list)

                            }
                            listOfCourses[0].exercise = listOfExercises_list
                            console.log(listOfCourses)
                            res.send(listOfCourses)

                        }
                        else{
                            console.log(listOfCourses)
                            res.send(listOfCourses)
                        }

                    })
                })

            }
            else{
                console.log('data is not available')
            }
        })
    })
}