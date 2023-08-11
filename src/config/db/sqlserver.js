// const Connection = require('tedious').Connection;

// const config = {
//     server: 'localhost',
//     authentication: {
//         type: 'default',
//         options: {
//             username: 'sa',
//             password: '123'
//         }
//     },
//     options: {
//         encrypt: true,
//         database: 'QuanLyNhanVien'
//     }
// }

// var connection = new Connection(config);
// connection.on('connect', function (err) {
//     // If no error, then good to proceed.  
//     executeStatement();
//     console.log("Connected");
// });

// connection.connect();

// var Request = require('tedious').Request;
// var TYPES = require('tedious').TYPES;

// function executeStatement() {
//     var request = new Request("SELECT * from NhanVien", function (err) {
//         if (err) {
//             console.log(err);
//         }
//     });
//     var result = "";
//     request.on('row', function (columns) {
//         columns.forEach(function (column) {
//             if (column.value === null) {
//                 console.log('NULL');
//             } else {
//                 result += column.value + " ";
//             }
//         });
//         console.log(result);
//         result = "";
//     });

//     request.on('done', function (rowCount, more) {
//         console.log(rowCount + ' rows returned');
//     });

//     // Close the connection after the final event emitted by the request, after the callback passes
//     request.on("requestCompleted", function (rowCount, more) {
//         connection.close();
//     });
//     connection.execSql(request);
// }



// module.exports = { connection };

const sql = require('mssql')
const express = require('express');
const app = express();

const config = {
    user: 'sa',
    password: '123',
    server: 'LAPTOP-S31ERO96',
    database: 'QuanLyNhanVien',
    port: 1433
};

sql.connect(config, (err) => {
    if (err) console.log(err);

    let sqlRequest = new sql.Request();

    let sqlQuery = "select * from NhanVien";
    sqlRequest.query(sqlQuery, (err, data) => {
        if (err) console.log(err);
        console.table(data.recordset);
        sql.close();
    })
    sqlRequest.query('insert into NhanVien(MaNhanVien,MaPhongBan,HoTen,NgaySinh,GioiTinh,NgayVaoLam,DiaChi,BangCap) values(@MaNhanVien,@MaPhongBan,@HoTen,@NgaySinh,@GioiTinh,@NgayVaoLam,@DiaChi,@BangCap)', { MaNhanVien: 'IT1200', MaPhongBan: 'IT', HoTen: "Hà Đức Hoàn", NgaySinh: '2003-12-17', GioiTinh: 'Nam', NgayVaoLam: "2025-12-17", DiaChi: '61 Mạc Đỉnh Chi', BangCap: 'cử nhân' }, (err,data) => {
        console.table(data.recordset)
    })
})

// sql.insert(config, (err) => {
//     if(err) console.log(err);

// })

module.exports = { sql }