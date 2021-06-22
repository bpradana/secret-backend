const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    votes: {
        type: Number,
        default: 0
    },
    comments: [{ content: String, date: Date }]
});

module.exports = mongoose.model('Posts', PostSchema);