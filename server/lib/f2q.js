var utils = require('./utils').Utils();
var props = require('./map').props;
var mql_person = require('./mql_person.js').person;

exports.createQuery = function createQuery(mid, opt) {
	var url = utils.getBaseUrl();

	switch (opt) {
		case "person":
			mql_person.mid = mid;
			return url + JSON.stringify(mql_person);

		case "animal":
			return "" //TODO

	}

};

exports.toQeeme = function toQeeme(data) {

	data = JSON.stringify(data);
	for (var item in props) {
		data = utils.replaceAll(props[item], item, data);
	}
	data = JSON.parse(data);

	return data;
};