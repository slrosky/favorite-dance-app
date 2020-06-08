const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const classSchema = new Schema({
    title: String,
    image: String,
    day: {type: String, enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']},
    hour: {type: String, enum:['1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00']},
    time: {type: String, enum:['PM, AM']},
    duration: String,
    level: {type: String, enum: ['Begginner', 'Intermediate', 'Advanced']},
    style: {type: String, enum: ['Lindy Hop', 'Collegiate Shag', 'Balboa', 'Solo Jazz']},
    description: Number,
    teachers: [{
        type: Schema.Types.ObjectId,
        ref: 'Teacher'
    }]
})

module.exports = mongoose.model('Class', classSchema);