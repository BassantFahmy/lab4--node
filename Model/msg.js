const mongoose = require('mongoose');

const msgSchema = new mongoose.Schema({

    from: Number,
    to: Number,
    body: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }

});
const Msg = mongoose.model('Msg', msgSchema);
module.exports = Msg;

