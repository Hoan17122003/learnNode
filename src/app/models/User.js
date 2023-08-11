const mongoose = require('mongoose');
//plugin
const slug = require('mongoose-slug-generator')

const Schema = mongoose.Schema;

const User = new Schema({
    NameUser: { type: String, maxLength: 600 , require: true },
    PassWord : {type : String, require: true}
}, {
    timestamps: true
});

module.exports = mongoose.model('User', User);
