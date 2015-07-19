var express = require('express');
var router = express.Router();

router.get('/list', function(req, res) {
 	var db = req.db;
	var collection = db.get('Users');
	collection.find({}, {}, function(e, users) {
		res.json(users);
	});
});

//VALIDATION MUST BE CLIENT SIDE FOR THIS ONE
router.post('/upsert', function(req, res) {
	var db = req.db;
	var input = req.body;
	var collection = db.get('Users');
	try {
		input.admin = input.admin == 'true' ? input.admin : false;
		input.delta_number = parseInt(input.delta_number)
		collection.update({delta_number: input.delta_number}, input, { upsert : true });
		res.json({
			success: true, 
			added: input
		});
	} catch (e) {}

	res.json({
		success: false,
		notadded: input
	});
});

module.exports = router;
