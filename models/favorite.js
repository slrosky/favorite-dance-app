const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
    studios: [{
        type: Schema.Types.ObjectId,
        ref: 'Studio'
    }],
    classes: [{
        type: Schema.Types.ObjectId,
        ref: 'Class'
    }]
})

module.exports = mongoose.model('Favorite', favoriteSchema);

