var request = require('request'),
	f2q = require('./f2q');

var bindQeeme = function(body, res) {
	// to support CORS
	res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
	
	res.send(f2q.toQeeme(body));
};

var qeeme = {
	search: function(mid, opt, res) {
		f2q.search(mid, opt,function(data){
			bindQeeme(data,res);
		});
	}
};

module.exports = qeeme;
