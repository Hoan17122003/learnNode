const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../ulti/mongoose')
const cookieParser = require('cookie-parser')
const express = require('express')
const app = express()
const session = require('express-session')

app.use(cookieParser())
app.use(session({
    secret: 'mySecret',// key bí mật để mã hóa session
    resave: false,// không lưu lại nếu session không thay đổi 
    saveUninitialized: true,// lưu trữ session cho các yêu cầu chưa được khởi tạo
    cookie: {
        maxAge:60000,
        secure: true
    }
}))


class SiteController {

    //[GET] /
    // viết thông thường
    // async Home(req, res) {

    //     try {
    //         const data = await Course.find({});
    //         res.json(data)          
    //     } catch (error) {
    //         res.status(400).send("Error")
    //     }
    //     // res.render('Home')

    // }
    // viết theo promise
    Home(req, res, next) {
        Course.find({})
            .then(course => (
                res.render('home', { course: multipleMongooseToObject(course) })
            ))
            .catch(next)
    }
    //[GET]/search
    Search(req, res) {
        res.render('search')
    }
    // SearchPost(req,res) {
    //     console.log(req.body);
    //     res.send('')
    // }
}
module.exports = new SiteController