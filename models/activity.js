const mongoose = require('mongoose');

const acticitySchema = new mongoose.Schema({
    work: {
        type: String,
        required: true
    },
    categ: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    }
});


const Activity = mongoose.model('Activity',acticitySchema);

module.exports = Activity;