const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bloodSchema = new Schema({
    donername: {type: String, required: true},
    group: { type: String, required: true},
    date: { type: Date, required: true},
}, {
    timestamps: true,
});

const Blood = mongoose.model('Blood', bloodSchema);

module.exports = Blood;