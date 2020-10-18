const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClassRoomSchema = new mongoose.Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: "studentUser",
	},
	classRoomName: String,
	createdBy: {
		type: String,
		required: true,
	},
	fileLinks: [
		{
			title: String,
			description: String,
			link: String,
		},
	],
	announcements: [
		{
			title: String,
			description: String,
		},
	],
	classRoomCode: String,
	students: [
		{
			user: {
				type: Schema.Types.ObjectId,
				ref: "studentUser",
			},
			name: String,
			email: {
				type: String,
				unique: true,
			},
		},
	],
	date: {
		type: Date,
		default: Date.now,
	},
});

const ClassRoom = mongoose.model("classroom", ClassRoomSchema);

module.exports = ClassRoom;
