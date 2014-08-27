var utils = require('./utils');

var MAP = {
	"gender":"/people/person/gender",
	"age":"/people/person/age",
	"nationality":"/people/person/nationality",
	"image":"/common/topic/image",
	"dateBirth":"/people/person/date_of_birth",
	"placeBirth":"/people/person/place_of_birth",
	"geolocation":"/location/location/geolocation",
	"parents":"/people/person/parents",
	"children":"/people/person/children",
	"spouse":"/people/marriage/spouse",
	"degree":"/education/education/degree",
	"schools":"/education/education/institution",
	"profession":"/people/person/profession",
	"website":"/common/topic/official_website",
	"social_presence":"/common/topic/social_media_presence"
};

exports.search = function search(mid){

 return "https://www.googleapis.com/freebase/v1/search?filter=(all mid:"+mid+")&output=(" 
 	+"(timepoint."+MAP.dateBirth+")"
 	+"(measurement."+MAP.age+")"
 	+"(member_of."+MAP.nationality+")"
 	+"("+MAP.placeBirth+" "+MAP.geolocation+" )"
 	+"(category."+MAP.gender+")"
 	+"(property."+MAP.image+")"
 	+"("+MAP.parents+" ("+MAP.image+")( category."+MAP.gender+") )"
 	+"("+MAP.children+" ("+MAP.image+")( category."+MAP.gender+" ) )"
 	+"(peer_of."+MAP.spouse+" ("+MAP.image+") ( category."+MAP.gender+"))"
 	+"(certification."+MAP.degree+")"
 	+"(member_of."+MAP.schools+" "+MAP.geolocation+")"
 	+"(practitioner_of."+MAP.profession+")"
 	+"(url."+MAP.website+")"
 	+"(url."+MAP.social_presence+")"
 	+")&lang=en&limit=1";
};

var getFamilyInfo = function(q,arr,rel){
	for(var p in arr){
		var curr = arr[p];
		q.properties.family[rel].push({
			"mid":curr["mid"],
			"name":curr["name"],
			"gender":utils.fPath(curr,MAP.gender,"category")[0]["name"],
			"images":utils.fPath(curr,MAP.image)
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

	q.properties = {};
	q.properties.gender          = utils.fPath(output,MAP.gender,"category")[0]["name"];
	q.properties.nationality     = utils.fPath(output,MAP.nationality,"member_of");
	q.properties.date_of_birth   = utils.fPath(output,MAP.dateBirth,"timepoint");
	q.properties.age             = utils.fPath(output,MAP.age,"measurement")[0];
	q.properties.images          = utils.fPath(output,MAP.image,"property");
	q.properties.degree          = utils.fPath(output,MAP.degree,"certification");
	q.properties.schools         = utils.fPath(output,MAP.schools,"member_of");
	q.properties.profession      = utils.fPath(output,MAP.profession,"practitioner_of");
	q.properties.website         = utils.fPath(output,MAP.website,"url");
	q.properties.social_presence = utils.fPath(output,MAP.social_presence,"url");
	
	var placeBirth = utils.fPath(output,MAP.placeBirth)[0];
	q.properties.place_of_birth = {
									"name":utils.fPath(output,MAP.placeBirth)[0]["name"],
									"location":utils.fPath(placeBirth,MAP.geolocation)[0]
								};

	q.properties.family = {
		parents:[],
		children:[],
		spouse:[]
	};

	//Family
	var parents = utils.fPath(output,MAP.parents);
	var children = utils.fPath(output,MAP.children);
	var spouse = utils.fPath(output,MAP.spouse,"peer_of");

	getFamilyInfo(q,parents,"parents");
	getFamilyInfo(q,children,"children");
	getFamilyInfo(q,spouse,"spouse");

	return q;
};