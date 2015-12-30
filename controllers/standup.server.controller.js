var Standup = require('../models/standup.server.model.js');

exports.list = function(req,res) {
	var query = Standup.find();

	query.sort({cratedOn: 'desc'})
		.limit(12)
		.exec(function (err,results) {
			res.render('index', {title: 'Lipsum', notes: results});
		});
};

exports.filterByMember = function(req,res) {
	var query = Standup.find();
	var filter = req.body.memberName;

	query.sort({cratedOn: 'desc'});

	if(filter.length > 0){
		query.where({memberName: filter})
	}

	query.exec(function(err,results) {
		res.render('index',{title: 'Lipsum', notes: results});
	});
}

exports.create = function(req,res) {
	var entry = new Standup({
		memberName: req.body.memberName,
		project: req.body.project,
		workYesterday: req.body.workYesrday,
		workToday: req.body.workToday,
		impediment: req.body.impediment
	});

	entry.save(); //the callback function that I don't supply is used mainly to handle errors

	// redirect to home page
	res.redirect(301, '/');
};

exports.getNote = function(req,res) {
	res.render('newnote', {title: 'Standup - New Note'});
};
