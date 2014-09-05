var utils = require('./utils').Utils();
var request = require('request');
var props = require('./map').props;
var mql_person = require('./mql_person.js').person;

exports.search = function search(mid, opt, callBack) {
	var url = utils.getBaseUrl();

	switch (opt) {
		case "person":
			mql_person.mid = mid;
			url += JSON.stringify(mql_person);
			break;

		case "animal":
			return "" //TODO
			break;

	}

	request(url, function(error, response, body) {
		if (!error && response.statusCode == 200) {
			if (!!callBack) {
				callBack(body);
			}
		} else {
			//TODO handle errors
		}
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