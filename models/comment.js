const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  text: String,
  likes: Number,
  date: Date,
});

module.exports = mongoose.model('Comment', commentSchema);
