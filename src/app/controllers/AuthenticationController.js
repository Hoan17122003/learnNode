const User = require('../models/User')
const express = require('express')
const app = express()
const session = require('express-session')
const cookieParser = require('cookie-parser')
const { mongooseToObject } = require('../../ulti/mongoose')

app.use(cookieParser())
app.use(session({
    secret: 'session client',// key bí mật để mã hóa session
    resave: false,// không lưu lại nếu session không thay đổi 
    saveUninitialized: true,// lưu trữ session cho các yêu cầu chưa được khởi tạo
    cookie: {
        maxAge: 60000,
        secure: true
    }
}))

class AuthenticationController {
    //[GET]/TEST/Login
    LoginGet(req, res, next) {
        res.render('authentication/login')
    }
    //[POST]/
    LoginPost(req, res, next) {
        User.findOne({ NameUser: req.params.nameUser, PassWord: req.params.passwordUser })
            .then((user) => {
                res.render('user', {
                    user : mongooseToObject(user)
                })
            })
            .catch(next)

    }
}
module.exports = new AuthenticationController()