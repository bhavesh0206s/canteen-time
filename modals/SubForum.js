const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SubForumSchema = new Schema({
  subForumTopics: {
    type: Array,
    default: ['Math', 'Science', 'English']
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = SubForum = mongoose.model('subForum', SubForumSchema);