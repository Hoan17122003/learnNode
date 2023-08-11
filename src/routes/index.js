const newsRouter = require('./news.routes')
const siteRouter = require('./site.routes')
const course = require('./course.routes')
const meRouter = require('./me.routes')
const cookie = require('./Cookie.routes')
const authentication = require('./Authentication.routes')


function route(app) {


    // app.post('/search', (req, res, next) => {
    //     console.log(req.body);
    //     res.send('')
    // })
    app.use('/user', (req, res) => {
        console.log("get:" + req.query.q);
        res.render('user')
    })
    app.use('/course', course)
    // app.get('/news', (req,res) => {
    //     res.render('news')
    // })
    app.use('/news', newsRouter)
    app.use('/me',meRouter)
    app.use('/TEST',authentication)
    app.use('/test',cookie)
    app.use('/', siteRouter)
}
module.exports = route 