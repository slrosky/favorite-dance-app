const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teacherSchema = new mongoose.Schema({
    name: String,
    styles: String,
    location: String,
    avatar: String,
});

module.exports = mongoose.model('Teacher', teacherSchema);