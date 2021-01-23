const knex = require('../connection/knex_connection')

module.exports = (Router) => {
    Router.get('/saral_api', (req, res) => {
        knex.select('*').from('courses').then((listOfCourses) => {
            knex.select('*').from('exercise').then((listOfExercises) => {
                knex.select('*').from('chapter').then((listOfChapters) => {
                    varx = []
                    for(counter of listOfCourses){
                
                        listOfExercises_list = []
                        for(var count of listOfExercises){
                            if(count.id == counter.id){
                                course_list = []
                                for(index of listOfChapters){
                                    if(index.course_id == count.course_id && index.id == count.id){
                                        course_list.push(index)
                                    }
                                }                            
                                count.usersummision = course_list
                                listOfExercises_list.push(count)
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




