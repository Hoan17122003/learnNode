const Course = require('../models/Course');
const { mongooseToObject, multipleMongooseToObject } = require('../../ulti/mongoose')

class CourseController {


    //[GET]/course/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug }).lean()
            .then(course => {
                console.log(course.videoID);
                res.render('./course/show', { course })
            })
            .catch(next)
    }
    //[GET]/ course/ create
    create(req, res, next) {
        res.render('./course/create')
    }
    //[POST]/course/store
    store(req, res, next) {
        const form = req.body;
        const course = new Course(form);
        course.save()
        res.redirect('/')
    }
    //[GET]/course/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id).lean()
            .then(course => res.render('./course/edit', {
                course
            }))
            .catch(next)
    }
    //[PUT]/course/:id
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => {
                console.log('test');
                res.redirect('/me/stored/course')
            })
            .catch(next)
    }
    //[delete]/me/stored/course/:id
    destroy(req, res, next) {

        Course.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }
    //[delete]/course/:id/force
    forceDestroy(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }

    //[patch]/course/:id/restore
    restore(req, res, next) {
        Course.findDeleted({})
            .then((courses) => {
                var courseDeleted = [];
                courses.forEach((element) => {
                    if (element.deleted == true) {
                        courseDeleted.push(element);
                    }
                });
                console.log(courseDeleted);
                res.render('me/trash', {
                    course: multipleMongooseToObject(courseDeleted)
                });
            })
            .catch(next);
    }


    //[Get]/me/trash/course
    rubbit(req, res, next) {
        console.log(wrapper)
        res.render('me/trash', {
            trash: wrapper
        })
        res.send('')
    }
}


module.exports = new CourseController()