const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    userName: {type: String, required: true},
    content: {type: String, required: true},
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
        }
    }, {
        timestamps: true
});

module.exports = mongoose.model('Post', postSchema);