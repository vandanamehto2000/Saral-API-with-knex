const fs = require('fs');   
const knex= require('../connection/knex_connection')
const jwt = require('jsonwebtoken');

module.exports=(Router)=>{

    // here we will get whole courses
    Router.get('/courses',(req,res)=>{
        var file = JSON.parse(fs.readFileSync('//home/navgurukul/Desktop/Saral_Api/file.txt'))
        knex.select('*').from('courses')
        .then((listOfCourses) => {
            for(Course of file){
                var dictOfCourse = {}
                dictOfCourse['id'] = Course.id,
                dictOfCourse['name'] = Course.name,
                dictOfCourse['description'] = Course.description
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

    // we will get the courses by id
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
  









//         // Router.get('/courses/verify', (req, res) => {

//             // const token = jwt.sign(req.body, 'secretKey')
//             // // console.log(token)
//             // res.cookie(token)
//             // console.log({msg: '........youn have logged in successfully...........', token: token})
//             // res.json({msg: '........youn have logged in successfully...........', token: token})
//             // token = req.headers.cookie.split(' ')
//             // // console.log(token)
//             // token = token[token.length - 1].slice(0, -10)
//             // // console.log(token)
//             // jwt.verify(token, 'secretKey', (err, data) => {
//             //     if(!err) {
//                     // console.log(data)
//             var file = JSON.parse(fs.readFileSync('//home/navgurukul/Desktop/Saral_Api/file.txt'))
//             // only all course is coming rest of the thinngs it is not showing 
//             // console.log(file)
//             const token = jwt.sign(req.body, 'secretKey')
//         // console.log(token)
//             res.cookie(token)
//             console.log({msg: '........youn have logged in successfully...........', token: token})
//             res.json({msg: '........youn have logged in successfully...........', token: token})
//             token = req.headers.cookie.split(' ')
//             // console.log(token)
//             // token = token[token.length - 1].slice(0, -10)
//             // console.log(token)
//             jwt.verify(token, 'secretKey', (err, data) => {
//                 if(!err) {
//                     // console.log(data)
//                     knex.select('*').from('courses')
//                     .then((listOfCourses) => {
//                         // empty object is showing
//                         // console.log(listOfCourses)
//                         for(Course of file){
//                             // whole course is coming accept chapters
//                             // console.log(Course)
//                             var dictOfCourse = {}
//                             // empty object is coming infinity.
//                             // console.log(dictOfCourse)
//                             dictOfCourse['id'] = Course.id,
//                             dictOfCourse['name'] = Course.name,
//                             dictOfCourse['description'] = Course.description
//                             // perfect output is coming which i want
//                             // console.log(dictOfCourse)
//                             listOfCourses.push(dictOfCourse)
//                         }
//                         console.log(listOfCourses)
//                         res.send(listOfCourses)
//                     })
//                     .catch((err) => {
//                         console.log(err)
//                         res.send(err)
//                     })
//                 }
//                 else{
//                     console.log(err)
//                 }
//             })
//         })
        


//         // .get('/courses',(req,res)=>{
//         //     var file = JSON.parse(fs.readFileSync('//home/navgurukul/Desktop/Saral_Api/file.txt'))
//         //     knex.select('*').from('courses')
//         //     .then((listOfCourses) => {
//         //         for(Course of file){
//         //             var dictOfCourse = {}
//         //             dictOfCourse['id'] = Course.id,
//         //             dictOfCourse['name'] = Course.name,
//         //             dictOfCourse['description'] = Course.description
//         //             listOfCourses.push(dictOfCourse)
//         //         }
//         //         console.log(listOfCourses)
//         //         res.send(listOfCourses)
//         //     })
//         //     .catch((err) => {
//         //         console.log(err)
//         //         res.send(err)
//         //     })
//         // })

// // By id we will get the course
// //     .get('/courses/:id', (req, res) => {
// //         var file = JSON.parse(fs.readFileSync('//home/navgurukul/Desktop/Saral_Api/file.txt'))
// //         knex.select('*').from('courses')
// //         .then((listOfCourses) => {
// //             for(Course of file){
// //                 if(Course.id == req.params.id){
// //                     var dictOfCourse = {}
// //                     dictOfCourse['id'] = Course.id,
// //                     dictOfCourse['name'] = Course.name,
// //                     dictOfCourse['description'] = Course.description
// //                     listOfCourses.push(dictOfCourse)

// //                 }
// //             }
// //             console.log(listOfCourses)
// //             res.send(listOfCourses)
// //         })
// //         .catch((err) => {
// //             console.log(err)
// //             res.send(err)
// //         })
// //     })
// // }
  
   




