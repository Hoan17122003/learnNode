// var http = require('http');
// var dt = require('./myFirstdate');

// // http.createServer(function (req, res) {
// //   res.writeHead(200, {'Content-Type': 'text/html'});
// //   res.end('Hello World!');
// // }).listen(8080);

// http.createServer((req, res) => {
//   res.writeHead(200, {
//     'Content-Type' : 'text/html'
//   });
//   res.write(" j z trời : " + dt.myDatetime());
//   res.end()
// }).listen(8080);

var Connection = require('tedious').Connection;
const path = require('path');
const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const port = 3000;
const morgan = require('morgan');
// module Events || với mỗi hành đông trên máy tính là 1 sự kiện , các đối tượng trong node có thể kích hoạt các sự kiện ấy
var event = require('events');
var nodemailer = require('nodemailer');
var formidable = require('formidable');
// module fs dịch ra là file system có thể hiểu là dùng để thao tác với file
var fs = require('fs');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser')

app.use(cookieParser())

// eventEmitter kịch hoạt event này ta sẽ cần phải sử dụng method emit()
var eventEmiter = new event.EventEmitter();

app.use(express.static(path.join(__dirname, 'public')));

// //route

// HTTP logger
app.use(morgan('combined'));

//template engine
app.engine('hbs', handlebars({
    extname: '.hbs',
    helpers: {
        sum: (a, b) => a + b
    }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
app.use(methodOverride('_method'))

// app.get('/', (req, res) => {
//   res.render('home');
// });




// var rs = fs.createReadStream('page1.html')

// rs.on('open' ,(err,data) => {
//   console.log('the file is open')
// })

// var myEventHandle = () => {
//   console.log('I used event handler')
// }

// eventEmiter.on('scream',myEventHandle)

// eventEmiter.emit('scream')

// http.createServer(function (req, res) {
//   if (req.url == '/fileupload') {
//     var form = new formidable.IncomingForm();
//     form.parse(req, function (err, fields, files) {
//       var oldpath = files.filetoupload.filepath;
//       var newpath = 'C:/Users/Your Name/' + files.filetoupload.originalFilename;
//       fs.rename(oldpath, newpath, function (err) {
//         if (err) throw err;
//         res.write('File uploaded and moved!');
//         res.end();
//       });
//  });
//   } else {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
//     res.write('<input type="file" name="filetoupload"><br>');
//     res.write('<input type="submit">');
//     res.write('</form>');
//     return res.end();
//   }
// }).listen(8080);

// var server = http.createServer((req,res) => {
//   res.writeHead(200, {
//     'Conten-Type' : 'text/plain'
//   })

// var http = require('http');
// // var dateTime = require('./myFirstdate');
// // const str = dateTime.start.myDate();

// http.createServer(function(req,res) {
//   res.writeHead(200 ,{
//     'Content-Type' : 'text/html',
//   });
//   res.end('Hello server ');

// }).listen(port);

// http.createServer(function (req, res) {
//   res.writeHead(200,{
//     'Content-Type' : 'text/html',
//   })
//   var q = url.parse(req.url,true).query
//   var txt = q.year + " " + q.month;
//   // console.log(txt.url)
//   // res.write("Date time now : " + dt.MyDateTime() )
//   res.end(txt);
// }).listen(port);

//begin
// http.createServer(function (req, res) {
//   //Open a file on the server and return its content:
//   fs.readFile('page1.html','utf-8',(err, data) =>  {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     throw err
//     return res.end();
//   });
//   res.write('hehehe')
//   res.end()
// }).listen(port);
//end

// fs.appendFile('myNewFile.html','hello content', (err,data) => {
//   if(err) throw err
//   console.log( 'saved')
// })

// var http = require('http');
// var fs = require('fs');
// var url = require('url');
// var cofigPath = require('');
// var path = 'page1.html'
// var a = `http://localhost:8080/${path}?year=2017&month=february&name=hoanha`
// var q = url.parse(a,true)
// console.log(q)
// console.log(q.path)

// // fs.readFIle(path,callback) tạo tệp nodeJs đọc tệp html và trả về nội dung
// http.createServer(function (req, res) {

//   var urlReq = url.parse(req.url,true)
//   console.log(urlReq)

//   fs.readFile('.' + urlReq.pathname,'utf-8', function(err, data) {
//     // res.writeHead(200, {'Content-Type': 'text/html'});
//     //// viết vào kiểu dữ liệu
//     // res.write(data);
//     // ghi ra ở phần content

//     if(err) {
//       res.writeHead(404, {
//         'Content-Type': 'text/html'
//       })
//       res.write('404 not Found')
//       return res.end()
//     }
//     res.writeHead(200, {'Content-Type': 'text/html'})
//     res.write(data)
//     return res.end();
//     // đóng cổng requested
//   });
// }).listen(8080);

// // fs.appendFile method is createFIle if is exists and not empty not handle, đối số thứ 2 là content được thêm vào file
// fs.appendFile('./src/page1.html','tada !!!',(err,data) => {
//   if(err)
//     throw err
//   console.log('saved')
// })
// //phương thức này cờ làm đối số thứ 2 để thao tác với file , nếu file đó không tồn tại thì tệp trong path truyền vào đối số thứ 1 sẽ được tạo ra
// fs.open('./src/page1.html','w',(err) => {
//   if(err) throw err
//   console.log('saved')
// })
// // phương thức này thay  thế tệp và nội dung được chỉ định nếu nó không tồn tại , một tệp mới chứa nội dung đã được truyền bởi đối số thứ 2 sẽ được tạo ra
// fs.writeFile('./src/page1.html','Heheheheo', (err,data) => {
//   if(err) throw err
//   // console.log(data)
// })
// // cả 3 phương thức trên đều được tạo ra nếu đường dẫn file đó không tồn tại

// // Delete Files
// // fs.unlink('page2.html', err => {
// //   if(err) throw err
// //   console.log('Success')
// // })
// // dùng để đổi tên có thể đổi vị trí lun trong floder
// // fs.rename('./src/page1.html' ,'./src/page2.html', err => {
// //   if(err) throw err
// //   console.log('Success')
// // })

// chapter 2 Connect

// app.get('/findUser/:user-[\$]', (req, res) => {
//     res.send('Hello, world')
// })
// app.use('/', (req, res, next) => {
//     console.log(`${req.method} :  ${req.url}`)

//     next();
// })
// // app.use((req, res , next ) => {
// //   res.end(`You requested ${req.url}`)
// //   // next();
// // })
// app.use('/', function (err,req, res, next) {
//     if (new Date().getDay() !== 2) {
//         next('Access is only granted oFn thursdays');
//     } else {
//         next('succeed');
//     }
// });
// app.use('/', function (err, req, res, next) {

//     res.end(`<h1>Error</h1><p>${err}</p>`);
//     // next();
// });
// app.use('/' , (err,req,res,next) => {
//     res.status(300).send('not available');
// })

// app.listen(port, () => {
//     console.log('listening on port: ' + port);
// });

// chapter 4 : explain routing in express



// app.route('/user')
//     .get((req,res) => {
//         res.send('get a send')
//     })
//     .post((req,res)  => {
//         res.send('add user');
//     })
//     .put((req,res) => {
//         res.send('update user');
//     })
//     .delete((req,res) => {
//         res.send('delete user');
//     })
// app.use('/',router)


// app.use('/', (req,res) => {
//     res.send('hy');
// })

// //ví dụ xử lý định tuyến theo mảng
// const ob1 = (req,res,next) => {
//     console.log("ob1");
//     next();
// }
// const ob2 = (req,res,next) => {
//     console.log("ob2")
//     next()
// }
// const ob3 = (req,res,next) => {
//     res.send("ob3");
// }

// app.get("/a/getObject", [ob1,ob2,ob3])

// xử lý định tuyến độc lập

// app.route("/ad")
//     .get((req, res) => {
//         res.send("ối dồi ôi")
//     })
//     .post((req, res) => {
//         console.log("post");
//         res.send("post ")
//     })
//     .put((req, res) => {
//         console.log("update data");
//         res.sendFile("update file")
//     })



// app.get('/su', async (req,res,next) => {
//     var pool = await con;
//     var sqlString = "select * from ThietBi" 
//     return await pool.request().query(sqlString,function(error,record) {
//         console.log(error,record)
//     })
//     res.send("hehehe")
// })

const bird = require('./store/bird');
const route = require('./routes');

// Routes init



// app.use(bird)
app.use('/he/:he', (req, res, next) => {
    res.status(300).send("hehehehehee")
})
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())


// app.post('/search',  (req,res) => {
//     let context = {
//         name : req.query.q,
//     }
//     let template  = Handlebars.compile("{{name}}")
//     let html =  template(context)
//     fs.writeFile('./resources/user.hbs',html,(err) => {
//         if(err) console.error(err);
//         else {
//             console.log('dữ liệu đã đc ghi vào file');
//         }
//     })
//     res.send("")
// })



// app.post('/user', (req, res) => {
//     let context = {
//         name: req.query.q,
//     }
//     let template = Handlebars.compile("{{>name}}")
//     let html = template(context)
//     console.log(context.name);
//     fs.writeFile('./resources/views/user.hbs', html, (err) => {
//         if (err) console.error(err);
//         else {
//             console.log('dữ liệu đã đc ghi vào file');
//         }
//     })
//     console.log("post:" + req.query.q)
//     res.render('user')
// })

const db = require('./config/db/mongodb')
db.connect()
// app.use('/db',getConnection)
route(app)


app.listen(port, () => {
    console.log("start... localhost:" + port);
});
