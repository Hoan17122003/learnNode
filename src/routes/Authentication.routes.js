const express = require('express')
const router = express.Router();
const cookieParser = require('cookie-parser')
const app = express()
const authenTicationController = require('../app/controllers/AuthenticationController')

app.use(cookieParser())

router.get('/Login', authenTicationController.LoginGet)
router.post('/Login', authenTicationController.LoginPost)

module.exports = router