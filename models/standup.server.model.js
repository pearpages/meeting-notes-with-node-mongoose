var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Notes Schema definition
var standupSchema = new Schema({
	memberName: String,
	project: String,
	workYesterday: String,
	workToday: String,
	impediment: String,
	createdOn: {type: Date, default: Date.now}
});

// export the model
module.exports = mongoose.model('Standup', standupSchema);