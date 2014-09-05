var request = require('request'),
	f2q = require('./f2q');

var bindQeeme = function(body, res) {
	var result = JSON.parse(body).result;
	res.send(f2q.toQeeme(result));
};

var qeeme = {
	search: function(mid, opt, res) {
		f2q.search(mid, opt,function(data){
			bindQeeme(data,res);
		});
	}
};

module.exports = qeeme;