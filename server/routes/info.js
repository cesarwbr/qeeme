var express = require('express');
var router = express.Router();
var qeeme = require('../lib/qeeme');


router.post('/', function(req, res) {
	var mid = req.body.mid;
	qeeme.createQuery(mid, "person", res);
});

module.exports = router;