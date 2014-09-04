var utils = require('./utils');
var props = require('./map').props;


var binder = utils.fPath();
binder.setMap(props);

exports.search = function search(mid){

 return props["base"]
 	+mid+")&output=(" 
 	+binder.fetch("dateBirth")
 	+binder.fetch("age")
 	+binder.fetch("nationality")
 	+binder.fetch("gender")
 	+binder.fetch("image")
 	+binder.fetch("placeBirth",["geolocation"])
 	+binder.fetch("parents",["image","gender"])
 	+binder.fetch("children",["image","gender"])
 	+binder.fetch("spouse",["image","gender"])
 	+binder.fetch("degree")
 	//+binder.fetch("schools,["geolocation])
 	+binder.fetch("profession")
 	+binder.fetch("website")
 	+binder.fetch("social_presence")
 	+")&lang=en&limit=1";
};

var getFamilyInfo = function(q,arr,rel){
	for(var p in arr){
		var curr = arr[p];
		var bFamily = utils.fPath();
		bFamily.setMap(props);
		bFamily.setResult(curr);

		q.properties.family[rel].push({
			"mid":curr["mid"],
			"name":curr["name"],
			"gender":bFamily.bind("gender")[0]["name"],
			"images":bFamily.bind("image")
		});
	}
}

exports.toQeeme = function toQeeme(data){
	var data = data[0];

	var q = {};

	q.type = "person";
	q.name = data['name'];
	q.notable = data['notable'];

	var output = data['output'];
	binder.setResult(output);

	q.properties = {};
	q.properties.date_of_birth   = binder.bind("dateBirth")[0];
	q.properties.age             = binder.bind("age")[0];
	q.properties.nationality     = binder.bind("nationality")[0];
	q.properties.gender          = binder.bind("gender")[0]["name"];
	q.properties.images          = binder.bind("image");
	q.properties.degree          = binder.bind("degree");
	//q.properties.schools         = binder.bind(schools);
	q.properties.profession      = binder.bind("profession");
	q.properties.website         = binder.bind("website");
	q.properties.social_presence = binder.bind("social_presence");
	

	var placeBirth = binder.bind("placeBirth")[0];//FIX-ME hardcoded
	q.properties.place_of_birth = {
		"name": placeBirth["name"],
		"location": placeBirth[props.geolocation][props.geolocation][0]
	};

	q.properties.family = {
		parents:[],
		children:[],
		spouse:[]
	};

	//Family
	var parents = binder.bind("parents");
	var children = binder.bind("children");
	var spouse = binder.bind("spouse");

	getFamilyInfo(q,parents,"parents");
	getFamilyInfo(q,children,"children");
	getFamilyInfo(q,spouse,"spouse");

	return q;
};