const mongoose = require('mongoose');
//plugin
const slug = require('mongoose-slug-generator')
// const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, require: true },
    description: { type: String, maxLength: 600 },
    image: { type: String, maxLength: 255 },
    slug: { type: String, maxLength: 60 },
    videoID: { type: String, require: true },
    slug: { type: String, slug: 'name', unique: true }
}, {
    timestamps: true
});
//add plugin
mongoose.plugin(slug);
// Course.plugin(mongooseDelete, {
//     overrideMethods: 'all',
// })

module.exports = mongoose.model('Course', Course);
