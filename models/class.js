const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const classSchema = new Schema({
    title: String,
    day: String,
    time: String,
    duration: String,
    level: String,
    style: String,
    description: String,
    teachers: [{
        type: Schema.Types.ObjectId,
        ref: 'Teacher'
    }]
})

module.exports = mongoose.model('Class', classSchema);