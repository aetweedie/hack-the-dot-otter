var express = require('express');
var yelp = require('yelp').createClient({
	consumer_key: "",
	consumer_secret: "",
	token: "",
	token_secret: ""
});
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	yelp.search({term: "bar trivia", location: "Boulder, CO", limit: 10 }, function(error, data) {
		res.send(data);
	});
});

module.exports = router;
