var assert = require("assert");
var f2q = require("../lib/f2q.js");

describe('f2q', function(){
  describe('#search("/m/02mjmr", "person", cb )', function(){
  	var response = null;
    it('Should return an json object', function(done){
      f2q.search("/m/02mjmr","person",function(res){
      	response = JSON.parse(res);
      	assert.notEqual("undefined",response);
      	done();
      });
    });


    it('Should have the property mid',function(){
    	assert(undefined !== response.result["mid"]);
    });

    it('Should have the property name',function(){
    	assert(undefined !== response.result["name"]);
    });

    it('Should have the property /people/person/gender',function(){
    	assert(undefined !== response.result["/people/person/gender"]);
    });

    it('Should have the property /common/topic/image',function(){
    	assert(undefined !== response.result["/common/topic/image"]);
    });

    it('Should have the property /people/person/nationality',function(){
    	assert(undefined !== response.result["/people/person/nationality"]);
    });

    it('Should have the property /people/person/date_of_birth',function(){
    	assert(undefined !== response.result["/people/person/date_of_birth"]);
    });

    it('Should have the property /people/deceased_person/date_of_death',function(){
    	assert(undefined !== response.result["/people/deceased_person/date_of_death"]);
    });

    it('Should have the property /people/person/place_of_birth',function(){
    	assert(undefined !== response.result["/people/person/place_of_birth"]);
    });

    it('Should have the property /people/person/children',function(){
    	assert(undefined !== response.result["/people/person/children"]);
    });

    it('Should have the property /people/person/parents',function(){
    	assert(undefined !== response.result["/people/person/parents"]);
    });

    it('Should have the property /people/person/profession',function(){
    	assert(undefined !== response.result["/people/person/profession"]);
    });

    it('Should have the property /people/person/education',function(){
    	assert(undefined !== response.result["/people/person/education"]);
    });

    it('Should have the property /common/topic/official_website',function(){
    	assert(undefined !== response.result["/common/topic/official_website"]);
    });

    it('Should have the property /common/topic/social_media_presence',function(){
    	assert(undefined !== response.result["/common/topic/social_media_presence"]);
    });

    it('Should have the property twitter:key',function(){
    	assert(undefined !== response.result["twitter:key"]);
    });

    it('Should have the property gplus:key',function(){
    	assert(undefined !== response.result["gplus:key"]);
    });

    it('Should have the property facebook:key',function(){
    	assert(undefined !== response.result["facebook:key"]);
    });

  })
})