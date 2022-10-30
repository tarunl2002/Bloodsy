const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const donerSchema = new Schema({
    donername: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
}, {
    timestamps: true,
});

const Doner = mongoose.model('Doner', donerSchema);

module.exports = Doner;