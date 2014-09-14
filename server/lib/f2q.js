var utils = require('./utils').Utils();
var freebase = require('freebase');
var props = require('./map').props;
var mql_person = require('./mql_person.js').person;

exports.search = function search(mid, opt, callBack) {
	var url = utils.getBaseUrl();
	switch (opt) {
		case "person":
			mql_person[0].mid = mid;
			break;

		case "animal":
			return "" //TODO
			break;

	}

	freebase.mqlread(mql_person,{},function(result){
		var queryResult = result;
		freebase.notable(mid,{},function(n){
			queryResult.result[0].notable = n;
			callBack(queryResult);
		})
	});

};

exports.toQeeme = function toQeeme(data) {
	data = JSON.stringify(data);
	for (var item in props) {
		data = utils.replaceAll(props[item], item, data);
	}
	
	data = JSON.parse(data);

	return data;
};