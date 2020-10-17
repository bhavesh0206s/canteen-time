const mongoose = require("mongoose");

const TeacherUserSchema = new mongoose.Schema({
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
	qualification: {
		type: String,
	},
	specialization: {
		type: String,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

const TeacherUser = mongoose.model("teacherUser", TeacherUserSchema);

module.exports = TeacherUser;
