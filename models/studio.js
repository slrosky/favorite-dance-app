const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studioSchema = new Schema({
    name: String,
    image: String,
    location: String,
    description: String,
    classes: [{
        type: Schema.Types.ObjectId,
        ref: 'Class'
    }]
})

module.exports = mongoose.model('Studio', studioSchema);