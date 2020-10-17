const mongoose = require("mongoose");

const StudentUserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  standard: {
    type: String,
  },
  school: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const StudentUser = mongoose.model("studentUser", StudentUserSchema);

module.exports = StudentUser;
