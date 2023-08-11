const mongose = require('mongoose')

async function connect() {
    try {
        await mongose.connect('mongodb://localhost:27017/f8_education_dev');
        console.log("connect success");
    } catch (err) {
        console.log('connect fallure!!!');
        throw err;
    }
}

module.exports = { connect }