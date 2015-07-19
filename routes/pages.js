var express = require('express');
var router = express.Router();

/* THIS ROUTER EXISTS TO SERVE MINIMALLY SERVER MODIFIED HTML/EJS FILES */
router.get('/', function(req, res) {
	var requestedpage = req.query.page;
	res.render('genericpage', {page : requestedpage});
	//res.send(page);
});

module.exports = router;
