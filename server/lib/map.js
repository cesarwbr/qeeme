exports.props = {
	"base":"https://www.googleapis.com/freebase/v1/search?filter=(all mid:",
	"gender":"category./people/person/gender",
	"age":"measurement./people/person/age",
	"nationality":"member_of./people/person/nationality",
	"image":"property./common/topic/image",
	"dateBirth":"timepoint./people/person/date_of_birth",
	"placeBirth":"/people/person/place_of_birth",
	"geolocation":"/location/location/geolocation",
	"parents":"/people/person/parents",
	"children":"/people/person/children",
	"spouse":"peer_of./people/marriage/spouse",
	"degree":"certification./education/education/degree",
	"schools":"member_of./education/education/institution",
	"profession":"practitioner_of./people/person/profession",
	"website":"url./common/topic/official_website",
	"social_presence":"url./common/topic/social_media_presence"
};