const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
    _id: String,
    createdAt: Number,
    humanDate: String,
    humanTime: String,
    scope: Schema.Types.Mixed,
    descShort: String,
    descLong: String
});

const model = mongoose.model('Ticket', schema);

module.exports = model;