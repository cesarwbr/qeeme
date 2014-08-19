var request = require('request');

var	BASE_URL       = "https://www.googleapis.com/freebase/v1/",
	SEARCH_FILTER  = "search?filter=(all mid:",
	SUFFIX_URL     = ")&output=(all)&amp;maxwidth=1000",
	BASE_IMAGE_URL = BASE_URL + "image";

var Place = function() {
	this.name = "";
	this.map  = "";
	this.type = "";
};

var Qeeme = function() {

	this.name    = "";
	this.type    = "";
	this.notable = "";

	this.properties = {
		gender: "",
		image: "",
		age: "",
		date_of_birthday: "",
		place_of_birthday: "",
		nationality: "",
		family: {
			parents: [],
			children: []
		},
		educations: "",
		profession: "",
		living_in: ""
	};

};

var bindQeeme = function(body, res) {
	var qeeme = new Qeeme();
	var json  = JSON.parse(body);
	//hardcoded (for test pourpose only )
	//FIX-ME (undefined values, arrays ... etc)
	var result                        = json.result[0];
	qeeme.name                        = result.name;
	qeeme.notable                     = result.notable.name;
	qeeme.properties.gender           = result.output.all["category./people/person/gender"][0]["name"];
	qeeme.properties.image            = BASE_IMAGE_URL + result.output.all["property./common/topic/image"][0]["mid"];
	qeeme.properties.age              = result.output.all["measurement./people/person/age"][0];
	qeeme.properties.date_of_birthday = result.output.all["timepoint./people/person/date_of_birth"][0];
	qeeme.properties.nationality      = result.output.all["member_of./people/person/nationality"][0];
	qeeme.properties.family.parents   = result.output.all["parent./people/person/parents"];
	qeeme.properties.family.children  = result.output.all["child./people/person/children"];
	qeeme.properties.profession       = result.output.all["practitioner_of./people/person/profession"];
	//TODO place of birth
	//TODO education
	res.send(qeeme);
};

var doRequest = function(mid, res) {
	var url = BASE_URL + SEARCH_FILTER + mid + SUFFIX_URL;
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