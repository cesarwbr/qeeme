var request = require('request'),
	query = require('./queries').queries;

var BASE_URL = "https://www.googleapis.com/freebase/v1/mqlread?query=";

var Place = function(name,geo,type) {
	console.log(geo);
	//http://maps.google.com/maps?z=12&t=m&q=loc:38.9419+-78.3020

	/*	z is the zoom level (1-20)
		t is the map type ("m" map, "k" satellite, "h" hybrid, "p" terrain, "e" GoogleEarth)
		q is the search query, if it is prefixed by loc: then google assumes it is a lat lon separated by a +
	*/
	var map = "http://maps.google.com/maps?z=1&t=m&q=loc:"+geo.latitude+"+"+geo.longitude;
	this.name = name;
	this.map = map;
	this.type = type;
};

var Person = function(mid,name,gender,images){
	this.mid = mid;
	this.name = name;
	this.gender = gender;
	this.images = images;
}

var Qeeme = function() {

	this.name = "";
	this.type = "";
	this.notable = "";

	this.properties = {
		gender: "",
		image: "",
		age: "",
		date_of_birthday: "",
		date_of_death: "",
		place_of_birthday: "",
		nationality: "",
		family: {
			parents: [],
			children: []
		},
		education: [{
			name:"",
			place:"",
			degree:""
		}],
		profession: ""
	};

};

var bindQeeme = function(body, res) {
	var qeeme = new Qeeme();
	var json = JSON.parse(body);
	//hardcoded (for test pourpose only )
	//FIX-ME (undefined values, arrays ... etc)
	var result = json.result;

	qeeme.name = result['name'];
	qeeme.properties.gender = result['/people/person/gender'];
	qeeme.properties.date_of_birthday = result['/people/person/date_of_birthday'];
	qeeme.properties.date_of_death = result['/people/deceased_person/date_of_death'];
	qeeme.properties.nationality= result['/people/person/nationality'];
	qeeme.properties.profession = result['/people/person/profession'];

	var pBirth = result['/people/person/place_of_birth'];
	qeeme.properties.place_of_birthday = new Place(pBirth.name,pBirth.geolocation,"map");

	var parents = result['/people/person/parents'];
	var children = result['/people/person/children'];
	var education = result['/people/person/education'];

	//FIX-ME Replicated code

	for(var item in parents ){
		var c = parents[item];
		qeeme.properties.family.parents.push(new Person(c.mid,c.name,c.gender,c['/common/topic/image']));
	}

	for(var item in children ){
		var c = children[item];
		qeeme.properties.family.children.push(new Person(c.mid,c.name,c.gender,c['/common/topic/image']));
	}

	for(var item in education ){
		var c = education[item];
		var e = {};
		var p = c['institution']['/location/location/geolocation'][0];
		if(p)
			e.place = new Place(c.name,c['institution']['/location/location/geolocation'][0],"map");
		if(c.degree)
			e.degree = c.degree.name;
		e.name = c['institution'].name;
		//FIX-ME .. can have blank values
	}

	res.send(qeeme);
};

var doRequest = function(mid, res) {
	var url = BASE_URL + '{"mid": "' + mid + query.person;
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