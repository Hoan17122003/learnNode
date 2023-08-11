const express = require('express')
const router = express.Router();
const cookieParser = require('cookie-parser')
const app = express()

app.use(cookieParser())

router.get('/cookie', (req, res, next) => {
    res.cookie('name' , 'Hà Đức Hoàn').send(req.cookie)
}) 

module.exports = router