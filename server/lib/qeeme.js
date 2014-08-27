var request = require('request'),
	query = require('./person');

var bindQeeme = function(body, res) {
	var result = JSON.parse(body).result;
	res.send(query.toQeeme(result));
};

var doRequest = function(mid, res) {
	var url = query.search(mid);
	console.log(url);
	request(url, function(error, response, body) {
		if (!error && response.statusCode == 200) {
			bindQeeme(body, res);
		}
	});
};

var qeeme = {
	search: function(mid, res) {
		doRequest(mid, res);
	}
};

module.exports = qeeme;