function getPerson(){
	var person = {};

	person['mid'] = null;
	person['name'] = null;
	person['/common/topic/image'] = [];
	person['/people/person/gender'] = null;
	person['/people/person/date_of_birth'] = null;
	person['/people/deceased_person/date_of_death'] = null;
	person['/common/topic/notable_for'] = [];
	person['/people/person/place_of_birth'] = {
		'name':null,
		'geolocation':{
			'latitude':null,
			'longitude':null,
			'optional':true
		},
		'optional':true
	};
	person['/people/person/nationality'] = null;
	person['/people/person/parents'] =[{
		'mid':null,
		'name':null,
		'gender':null,
		'/common/topic/image':[{
			'mid':null,
			'optional':true
		}]
	}];
	person['/people/person/children'] = [{
		'mid':null,
		'name':null,
		'gender':null,
		'/common/topic/image':[{
			'mid':null,
			'optional':true
		}]
	}];
	person['/people/person/profession'] = [];
	person['/common/topic/image'] = [{
		'mid':null,
		'optional':true
	}];
	person['/people/person/education'] = [{
		'degree':{
			'name':null,
			'optional':true
		},
		'institution':{
			'name':null,
			'/location/location/geolocation':{
				'latitude':null,
				'longitude':null,
				'optional':true
			}
		}
	}];
	person['/common/topic/official_website'] = [];
	person['/people/person/age'] =  null ;

	return person;
}

exports.mql = {
	'person': getPerson()
}