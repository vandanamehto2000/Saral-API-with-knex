const knex = require('../connection/knex_connection')
const fs = require('fs')

module.exports = (Router) => {
    Router.get('/saral/:id', (req, res) => {
        id = req.params.id

        knex.select('*').from('courses').where('id', id).then((data) => {
            // console.log(listOfCourses)
            if(data.length > 0){
                knex.select('*').from('exercise').where('id', id).then((listOfExercises) => {

                    knex.select('*').from('chapter').where('id', id).then((listOfChapters) => {
                        if(listOfExercises.length > 1){
                            listOfExercises_list = []
                            for(value of listOfExercises){
                                // console.log(value)
                                if(listOfChapters.length >= 1){
                                    // console.log(listOfChapters)
                                    empty_list = []
                                    for(index of listOfChapters){
                                        // console.log(values)
                                        if(index.course_id == value.course_id){
                                            empty_list.push(index)

                                        }
                                    }
                                    value['usersummision'] = empty_list
                                    listOfExercises_list.push(value)
                                }
                                else{
                                    listOfExercises_list.push(value)
                                }
                                // console.log(listOfExercises_list)

                            }
                            data[0].submission = listOfExercises_list
                            console.log(data)
                            res.send(data)

                        }
                        else{
                            console.log(data)
                            res.send(data)
                        }

                    })
                })

            }
            else{
                console.log('data is not available')
                res.send('data is not available')
            }
        })
    })
}














