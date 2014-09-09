exports.person = {

  "mid": null,
  "name": null,
  "/people/person/gender": null,
  "/people/person/date_of_birth": null,
  "/people/person/nationality": [],
  "/people/deceased_person/date_of_death": null,
  "/people/person/place_of_birth": {
    "name": null,
    "geolocation": {
      "latitude": null,
      "longitude": null,
      "optional": true
    },
    "optional": true
  },
  "/people/person/parents": [{
    "mid": null,
    "name": null,
    "gender": null,
    "/common/topic/image": [{
      "mid": null,
      "optional": true
    }],
    "optional": true
  }],
  "/people/person/children": [{
    "mid": null,
    "name": null,
    "gender": null,
    "/common/topic/image": [{
      "mid": null,
      "optional": true
    }],
    "optional": true
  }],
  "/people/person/profession": [],
  "/common/topic/image": [{
    "mid": null,
    "optional": true
  }],
  "/people/person/education": [{
    "degree": {
      "name": null,
      "optional": true
    },
    "institution": {
      "name": null,
      "/location/location/geolocation": [{
        "latitude": null,
        "longitude": null,
        "optional": true
      }]
    },
    "optional": true
  }],
  "/common/topic/social_media_presence": [],
  "facebook:key": [{
    "namespace": "/authority/facebook",
    "value": null,
    "optional": true
  }],
  "twitter:key": [{
    "namespace": "/authority/twitter",
    "value": null,
    "optional": true
  }],
  "gplus:key": [{
    "namespace": "/authority/google/google_plus",
    "value": null,
    "optional": true
  }],
  "/common/topic/official_website": []

};