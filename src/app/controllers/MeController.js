const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../ulti/mongoose')
const courseController = require('./CourseController')


class MeController {


    //[GET/]me/stored/course
    storedCourse(req, res, next) {

        Promise.all([Course.find({}), Course.countDocuments()])
            .then(([courses, countDelete]) => {
                res.render('me/storedCourse', {
                    countDelete, course: multipleMongooseToObject(courses)
                })
            })  
            .catch(next);
    }
    //[GET]/me/trash/course
    trashCourse(req, res, next) {

        Course.findDeleted({})
            .then(course => {
                res.render('me/trash', {
                    course: multipleMongooseToObject(course),
                })
            })
            .catch(next)

    }
}

module.exports = new MeController()