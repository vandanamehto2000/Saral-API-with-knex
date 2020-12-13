const knex = require('../connection/knex_connection')

module.exports = (Router) => {
    Router.get('/saral_api', (req, res) => {
        knex.select('*').from('courses').then((listOfCourses) => {
            knex.select('*').from('exercise').then((listOfExercises) => {
                knex.select('*').from('chapter').then((listOfChapters) => {
                    varx = []
                    for(counter of listOfCourses){
                        // console.log(counter)
                        listOfExercises_list = []
                        // exercise are coming
                        for(var count of listOfExercises){
                            // console.log(count)
                            if(count.id == counter.id){
                                course_list = []
                                for(index of listOfChapters){
                                    // console.log([index.usersubmissions])
                                    // chapter data is coming
                                    // console.log(index)
                                    if(index.course_id == count.course_id && index.id == count.id){
                                        course_list.push(index)
                                    }
                                }

                                // counter.usersubmissions = course_list
                                // listOfChapters.push(counter)
                                // console.log(listOfChapters)
                            
                                count.usersummision = listOfChapters
                                listOfExercises_list.push(count)
                                // console.log(listOfExercises_list)

                            }
                        }
                        counter.submission = listOfExercises_list
                        varx.push(counter)

                    }
                    console.log(varx)
                    res.send(varx)
                })
            })
        })
    })
}