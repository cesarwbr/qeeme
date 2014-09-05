var request = require('request'),
	f2q = require('./f2q');

var bindQeeme = function(body, res) {
	var result = JSON.parse(body).result;
	res.send(f2q.toQeeme(result));
};

var doRequest = function(mid, opt, res) {
	var url = f2q.createQuery(mid, opt);
	request(url, function(error, response, body) {
		if (!error && response.statusCode == 200) {
			bindQeeme(body, res);
		}
	});
};

var qeeme = {
	createQuery: function(mid, opt, res) {
		doRequest(mid, opt, res);
	}
};

module.exports = qeeme;