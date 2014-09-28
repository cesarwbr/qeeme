var loadCanvas = function() {
  var person0 = {
    "nationality": ["United States of America"],
    "twitter": [{
      "namespace": "/authority/twitter",
      "value": "BarackObama"
    }],
    "social_presence": [],
    "date_of_birth": "1961-08-04",
    "profession": ["Politician", "Lawyer", "Writer", "Author",
      "Law professor"
    ],
    "education": [{
      "degree": {
        "name": "Bachelor of Arts"
      },
      "institution": {
        "geolocation": [{
          "latitude": 40.8075,
          "longitude": -73.961944
        }],
        "name": "Columbia University"
      }
    }, {
      "degree": {
        "name": "Juris Doctor"
      },
      "institution": {
        "geolocation": [{
          "latitude": 42.378056,
          "longitude": -71.118611
        }],
        "name": "Harvard Law School"
      }
    }, {
      "degree": null,
      "institution": {
        "geolocation": [{
          "latitude": 21.302778,
          "longitude": -157.830556
        }],
        "name": "Punahou School"
      }
    }, {
      "degree": null,
      "institution": {
        "geolocation": [{
          "latitude": 34.127131,
          "longitude": -118.210879
        }],
        "name": "Occidental College"
      }
    }, {
      "degree": null,
      "institution": {
        "geolocation": [],
        "name": "Noelani Elementary School"
      }
    }, {
      "degree": null,
      "institution": {
        "geolocation": [],
        "name": "St. Francis of Assisi Catholic School"
      }
    }, {
      "degree": null,
      "institution": {
        "geolocation": [{
          "latitude": -6.198694,
          "longitude": 106.828984
        }],
        "name": "State Elementary School Menteng 01"
      }
    }],
    "gender": "Male",
    "date_of_death": null,
    "name": "Barack Obama",
    "parents": [{
      "gender": "Male",
      "name": "Barack Obama, Sr.",
      "images": [{
        "mid": "/m/042syxv"
      }],
      "mid": "/m/03qccxj"
    }, {
      "gender": "Female",
      "name": "Ann Dunham",
      "images": [{
        "mid": "/m/059y4q_"
      }],
      "mid": "/m/03hfxq_"
    }],
    "place_of_birth": {
      "geolocation": {
        "latitude": 21.3,
        "longitude": -157.816667
      },
      "name": "Honolulu"
    },
    "images": [{
      "mid": "/m/02nqg_h"
    }, {
      "mid": "/m/04jrbw0"
    }, {
      "mid": "/m/059x99z"
    }],
    "mid": "/m/02mjmr",
    "website": ["http://www.barackobama.com/"],
    "gplus": [{
      "namespace": "/authority/google/google_plus",
      "value": "110031535020051778989"
    }],
    "children": [{
      "gender": "Female",
      "name": "Natasha Obama",
      "images": [],
      "mid": "/m/02nqgyw"
    }, {
      "gender": "Female",
      "name": "Malia Ann Obama",
      "images": [],
      "mid": "/m/0gh6dh1"
    }],
    "facebook": [{
      "namespace": "/authority/facebook",
      "value": "barackobama"
    }],
    "notable": {
      "text": "US President",
      "lang": "en",
      "id": "/government/us_president",
      "name": "US President"
    }
  };

  var person1 = {
    "gender": "Male",
    "date_of_death": "2009-06-25",
    "images": [{
      "mid": "/m/044w4g0"
    }, {
      "mid": "/m/05v8b2r"
    }, {
      "mid": "/m/0jsgn0_"
    }],
    "name": "Michael Jackson",
    "children": [{
      "images": [{
        "mid": "/m/0654b8h"
      }],
      "gender": "Female",
      "mid": "/m/0598rm4",
      "name": "Paris-Michael Katherine Jackson"
    }, {
      "images": [{
        "mid": "/m/065qbz2"
      }],
      "gender": "Male",
      "mid": "/m/065qbyj",
      "name": "Prince Michael Jackson II"
    }, {
      "images": [{
        "mid": "/m/0654b5j"
      }],
      "gender": "Male",
      "mid": "/m/0598rmb",
      "name": "Michael Joseph Jackson, Jr."
    }],
    "profession": ["Record producer", "Businessperson", "Actor",
      "Singer-songwriter", "Musician", "Choreographer", "Film Producer",
      "Entertainer", "Dancer", "Film Score Composer", "Music Arranger",
      "Voice Actor", "Screenwriter", "Film director", "Music artist"
    ],
    "twitter": [{
      "namespace": "/authority/twitter",
      "value": "michaeljackson"
    }],
    "date_of_birth": "1958-08-29",
    "social_presence": ["http://www.imeem.com/michaeljackson",
      "http://www.last.fm/music/Michael+Jackson"
    ],
    "education": [{
      "degree": null,
      "institution": {
        "geolocation": [],
        "name": "Montclair College Preparatory School"
      }
    }],
    "gplus": [],
    "facebook": [{
      "namespace": "/authority/facebook",
      "value": "michaeljackson"
    }],
    "parents": [{
      "images": [{
        "mid": "/m/0654b6n"
      }],
      "gender": "Female",
      "mid": "/m/0524pr",
      "name": "Katherine Jackson"
    }, {
      "images": [{
        "mid": "/m/0654b4n"
      }],
      "gender": "Male",
      "mid": "/m/051y29",
      "name": "Joe Jackson"
    }],
    "place_of_birth": {
      "geolocation": {
        "latitude": 41.595556,
        "longitude": -87.345278
      },
      "name": "Gary"
    },
    "mid": "/m/09889g",
    "website": ["http://www.michaeljackson.com/",
      "http://www.sonymusic.co.jp/Music/International/Arch/ES/MichaelJackson/"
    ],
    "nationality": ["United States of America"],
    "notable": {
      "text": "Musical Artist",
      "lang": "en",
      "id": "/music/artist",
      "name": "Musical Artist"
    }
  };

  var person2 = {
    "mid": "/m/0b3kn4",
    "place_of_birth": {
      "geolocation": {
        "latitude": 43.7034,
        "longitude": 7.2663
      },
      "name": "Nice"
    },
    "parents": [{
      "mid": "/m/0ngn0q3",
      "gender": "Male",
      "name": "Michel Dadouche",
      "images": []
    }, {
      "mid": "/m/0ngn0qb",
      "gender": "Female",
      "name": "Christine Bartoli",
      "images": []
    }],
    "images": [{
      "mid": "/m/042cyh2"
    }],
    "date_of_death": null,
    "facebook": [{
      "namespace": "/authority/facebook",
      "value": "JeniferOfficiel"
    }],
    "name": "Jenifer",
    "social_presence": ["http://www.dailymotion.com/jenifer",
      "http://www.last.fm/music/Jenifer"
    ],
    "children": [{
      "mid": "/m/0v__tqr",
      "gender": "Male",
      "name": "Aaron Nouchy",
      "images": []
    }],
    "education": [],
    "profession": ["Singer", "Songwriter", "Actor"],
    "website": ["http://www.jeniferofficiel.com/"],
    "twitter": [{
      "namespace": "/authority/twitter",
      "value": "jeniferofficiel"
    }],
    "nationality": ["France"],
    "gplus": [],
    "gender": "Female",
    "date_of_birth": "1982-11-15",
    "notable": {
      "text": "Musical Artist",
      "lang": "en",
      "id": "/music/artist",
      "name": "Musical Artist"
    }
  };

  var person3 = {
    "twitter": [],
    "date_of_birth": "1889-04-20",
    "facebook": [],
    "gplus": [],
    "nationality": ["German Reich", "Austria"],
    "children": [{
      "name": "Jean-Marie Loret",
      "images": [],
      "gender": "Male",
      "mid": "/m/0j44_4b"
    }],
    "images": [{
      "mid": "/m/041hk2s"
    }],
    "profession": ["Politician", "Writer", "Artist", "Soldier",
      "Visual Artist"
    ],
    "parents": [{
      "name": "Alois Hitler",
      "images": [{
        "mid": "/m/02c_prm"
      }, {
        "mid": "/m/03t20bn"
      }],
      "gender": "Male",
      "mid": "/m/02p0d7"
    }, {
      "name": "Klara Hitler",
      "images": [{
        "mid": "/m/03t98hk"
      }, {
        "mid": "/m/0bcr1wk"
      }],
      "gender": "Female",
      "mid": "/m/0321wy"
    }],
    "date_of_death": "1945-04-30",
    "education": [{
      "degree": null,
      "institution": {
        "geolocation": [],
        "name": "BRG Steyr"
      }
    }, {
      "degree": null,
      "institution": {
        "geolocation": [],
        "name": "Bundesrealgymnasium Linz"
      }
    }, {
      "degree": null,
      "institution": {
        "geolocation": [],
        "name": "Volksschule Lambach"
      }
    }],
    "mid": "/m/07_m9_",
    "website": [],
    "place_of_birth": {
      "geolocation": {
        "longitude": 13.035,
        "latitude": 48.258333
      },
      "name": "Braunau am Inn"
    },
    "social_presence": [],
    "gender": "Male",
    "name": "Adolf Hitler",
    "notable": {
      "text": "Military Commander",
      "lang": "en",
      "id": "/military/military_commander",
      "name": "Military Commander"
    }
  };

  var person4 = {
    "social_presence": [],
    "children": [],
    "name": "Marina Silva",
    "profession": ["Environmentalist", "Politician", "Pedagogy",
      "Historian"
    ],
    "images": [{
      "mid": "/m/04g6qq9"
    }],
    "education": [],
    "parents": [],
    "website": [],
    "gplus": [],
    "date_of_death": null,
    "mid": "/m/047dbx9",
    "place_of_birth": {
      "name": "Rio Branco, Acre",
      "geolocation": {
        "longitude": -67.81,
        "latitude": -9.974722
      }
    },
    "gender": "Female",
    "nationality": ["Brazil"],
    "twitter": [],
    "date_of_birth": "1958-02-08",
    "facebook": [],
    "notable": {
      "text": "Politician",
      "lang": "en",
      "id": "/government/politician",
      "name": "Politician"
    }
  };

  var person5 = {
    "date_of_death": null,
    "mid": "/m/01jy51",
    "gplus": [],
    "website": ["http://theamydumas.com/"],
    "gender": "Female",
    "children": [],
    "name": "Amy Dumas",
    "images": [{
      "mid": "/m/02c90s5"
    }, {
      "mid": "/m/09hcw2h"
    }, {
      "mid": "/m/0gzw7g0"
    }],
    "nationality": ["United States of America"],
    "place_of_birth": {
      "name": "Fort Lauderdale",
      "geolocation": {
        "longitude": -80.15,
        "latitude": 26.133333
      }
    },
    "date_of_birth": "1975-04-14",
    "profession": ["Wrestler", "Singer", "Model"],
    "education": [{
      "degree": null,
      "institution": {
        "name": "Georgia State University",
        "geolocation": [{
          "longitude": -84.38611,
          "latitude": 33.75278
        }]
      }
    }],
    "facebook": [],
    "social_presence": ["https://twitter.com/AmyDumas",
      "https://www.facebook.com/fakepagessuckamydumas"
    ],
    "twitter": [],
    "parents": [],
    "notable": {
      "text": "TV Personality",
      "lang": "en",
      "id": "/tv/tv_personality",
      "name": "TV Personality"
    }
  };

  var person6 = {
    "profession": ["Singer", "Singer-songwriter", "Musician", "Artist",
      "Drummer", "Guitarist", "Keyboard Player", "Pianist",
      "Social activist",
      "Poet", "Entrepreneur", "Record producer", "Composer",
      "Film Producer",
      "Businessperson", "Peace activist", "Bassist", "Songwriter",
      "Film Score Composer", "Multi-instrumentalist", "Television producer",
      "Screenwriter", "Television Director", "Actor", "Music artist"
    ],
    "name": "Paul McCartney",
    "nationality": ["England"],
    "facebook": [{
      "value": "PaulMcCartney",
      "namespace": "/authority/facebook"
    }, {
      "value": "PercyThrillsThrillington",
      "namespace": "/authority/facebook"
    }],
    "place_of_birth": {
      "geolocation": {
        "longitude": -2.955,
        "latitude": 53.443
      },
      "name": "Walton, Liverpool"
    },
    "date_of_birth": "1942-06-18",
    "website": ["http://www.paulmccartney.com/",
      "http://www.whoispercythrillington.com/"
    ],
    "twitter": [{
      "value": "PaulMcCartney",
      "namespace": "/authority/twitter"
    }, {
      "value": "P_Thrillington",
      "namespace": "/authority/twitter"
    }],
    "education": [{
      "institution": {
        "name": "Liverpool Institute High School for Boys",
        "geolocation": [{
          "longitude": -2.972306,
          "latitude": 53.399556
        }]
      },
      "degree": null
    }, {
      "institution": {
        "name": "Joseph Williams Junior School",
        "geolocation": []
      },
      "degree": null
    }, {
      "institution": {
        "name": "Stockton Wood Road Primary School",
        "geolocation": []
      },
      "degree": null
    }],
    "date_of_death": null,
    "gplus": [{
      "value": "102029739889617898112",
      "namespace": "/authority/google/google_plus"
    }],
    "gender": "Male",
    "parents": [{
      "name": "James McCartney",
      "gender": "Male",
      "images": [],
      "mid": "/m/02k9tpb"
    }, {
      "name": "Mary McCartney",
      "gender": "Female",
      "images": [],
      "mid": "/m/02k9tpk"
    }],
    "children": [{
      "name": "Mary McCartney",
      "gender": "Female",
      "images": [],
      "mid": "/m/0bkgvn"
    }, {
      "name": "Stella McCartney",
      "gender": "Female",
      "images": [{
        "mid": "/m/063gmb9"
      }, {
        "mid": "/m/0h4hd2c"
      }],
      "mid": "/m/03j437"
    }, {
      "name": "James McCartney",
      "gender": "Male",
      "images": [{
        "mid": "/m/09hnstk"
      }],
      "mid": "/m/0drhp3"
    }, {
      "name": "Beatrice McCartney",
      "gender": "Female",
      "images": [],
      "mid": "/m/09pm1zj"
    }, {
      "name": "Heather McCartney",
      "gender": "Female",
      "images": [],
      "mid": "/m/05bm10"
    }],
    "social_presence": ["http://www.last.fm/music/Paul+McCartney"],
    "mid": "/m/03j24kf",
    "images": [{
      "mid": "/m/02bh9y4"
    }, {
      "mid": "/m/05y9527"
    }, {
      "mid": "/m/05y95d2"
    }],
    "notable": {
      "text": "Musical Artist",
      "lang": "en",
      "id": "/music/artist",
      "name": "Musical Artist"
    }
  };

  var person7 = {
    "date_of_death": null,
    "mid": "/m/0j6cj",
    "website": ["http://www.satriani.com/"],
    "gender": "Male",
    "gplus": [{
      "namespace": "/authority/google/google_plus",
      "value": "107940613488592745009"
    }],
    "children": [{
      "name": "Zachariah Satriani",
      "images": [],
      "mid": "/m/0n4m6sw",
      "gender": "Male"
    }],
    "name": "Joe Satriani",
    "twitter": [],
    "images": [{
      "mid": "/m/0292x5f"
    }, {
      "mid": "/m/03tbk3c"
    }, {
      "mid": "/m/0ccl8gs"
    }],
    "parents": [],
    "facebook": [{
      "namespace": "/authority/facebook",
      "value": "joesatriani"
    }],
    "place_of_birth": {
      "name": "Westbury",
      "geolocation": {
        "longitude": -73.588056,
        "latitude": 40.758889
      }
    },
    "date_of_birth": "1956-07-15",
    "profession": ["Guitarist", "Songwriter", "Musician", "Composer",
      "Record producer", "Multi-instrumentalist", "Actor"
    ],
    "education": [{
      "degree": null,
      "institution": {
        "name": "Five Towns College",
        "geolocation": [{
          "longitude": -73.369256,
          "latitude": 40.794789
        }]
      }
    }, {
      "degree": null,
      "institution": {
        "name": "Berklee College of Music",
        "geolocation": [{
          "longitude": -71.086944,
          "latitude": 42.346389
        }]
      }
    }],
    "social_presence": ["http://www.last.fm/music/Joe+Satriani"],
    "nationality": ["United States of America"],
    "notable": {
      "text": "Musical Artist",
      "lang": "en",
      "id": "/music/artist",
      "name": "Musical Artist"
    }
  };

  var person8 = {
    "gplus": [],
    "facebook": [],
    "profession": ["Football player"],
    "mid": "/m/026_dd6",
    "place_of_birth": {
      "name": "Richland",
      "geolocation": {
        "longitude": -119.281377,
        "latitude": 46.279657
      }
    },
    "date_of_birth": "1981-07-30",
    "date_of_death": null,
    "gender": "Female",
    "nationality": ["United States of America"],
    "website": ["http://www.ussoccer.com/teams/wnt/s/hope-solo.aspx"],
    "education": [{
      "institution": {
        "name": "Richland High School",
        "geolocation": []
      },
      "degree": null
    }],
    "name": "Hope Solo",
    "images": [{
      "mid": "/m/04ry_tp"
    }, {
      "mid": "/m/07y0g2v"
    }],
    "parents": [{
      "mid": "/m/0klghz2",
      "gender": "Male",
      "name": "Jeffrey Solo",
      "images": []
    }, {
      "mid": "/m/0z87fyk",
      "gender": null,
      "name": "Judy Solo",
      "images": []
    }],
    "children": [],
    "social_presence": [],
    "twitter": [],
    "notable": {
      "text": "Olympic athlete",
      "lang": "en",
      "id": "/olympics/olympic_athlete",
      "name": "Olympic athlete"
    }
  };

  var person9 = {
    "profession": ["Songwriter", "Singer", "Musician", "Drummer",
      "Guitarist",
      "Multi-instrumentalist", "Actor", "Film director",
      "Singer-songwriter"
    ],
    "education": [{
      "degree": null,
      "institution": {
        "name": "Bishop Ireton High School",
        "geolocation": []
      }
    }, {
      "degree": null,
      "institution": {
        "name": "Thomas Jefferson High School",
        "geolocation": []
      }
    }],
    "date_of_birth": "1969-01-14",
    "facebook": [],
    "website": [],
    "twitter": [],
    "gender": "Male",
    "gplus": [],
    "name": "Dave Grohl",
    "mid": "/m/0285c",
    "parents": [{
      "name": "James Grohl",
      "mid": "/m/0q4gbjj",
      "images": [],
      "gender": "Male"
    }, {
      "name": "Virginia Grohl",
      "mid": "/m/0q4gbqc",
      "images": [],
      "gender": "Female"
    }],
    "place_of_birth": {
      "name": "Warren",
      "geolocation": {
        "longitude": -80.814444,
        "latitude": 41.238333
      }
    },
    "date_of_death": null,
    "images": [{
      "mid": "/m/02dt21h"
    }, {
      "mid": "/m/04pvq3f"
    }, {
      "mid": "/m/063fmbh"
    }],
    "social_presence": [],
    "children": [{
      "name": "Violet Maye Grohl",
      "mid": "/m/063xy7y",
      "images": [],
      "gender": "Female"
    }, {
      "name": "Harper Willow Grohl",
      "mid": "/m/0jmvj24",
      "images": [],
      "gender": "Female"
    }, {
      "name": "Ophelia Grohl",
      "mid": "/m/011lzhyl",
      "images": [],
      "gender": "Female"
    }],
    "nationality": ["United States of America"],
    "notable": {
      "text": "Celebrity",
      "lang": "en",
      "id": "/celebrities/celebrity",
      "name": "Celebrity"
    }
  };

  var person10 = {
    "images": [{
      "mid": "/m/03qsz91"
    }],
    "name": "Kurt Cobain",
    "twitter": [],
    "website": [],
    "gender": "Male",
    "profession": ["Singer", "Musician", "Songwriter", "Guitarist",
      "Artist",
      "Visual Artist"
    ],
    "mid": "/m/0484q",
    "nationality": ["United States of America"],
    "children": [{
      "mid": "/m/027djm",
      "images": [{
        "mid": "/m/063g8d6"
      }, {
        "mid": "/m/07x_32_"
      }],
      "gender": "Female",
      "name": "Frances Bean Cobain"
    }],
    "date_of_death": "1994-04-05",
    "gplus": [],
    "facebook": [],
    "parents": [{
      "mid": "/m/059x_9g",
      "images": [],
      "gender": "Male",
      "name": "Donald Cobain"
    }, {
      "mid": "/m/059x_9n",
      "images": [],
      "gender": "Female",
      "name": "Wendy Cobain"
    }],
    "place_of_birth": {
      "name": "Aberdeen",
      "geolocation": {
        "longitude": -123.818611,
        "latitude": 46.975833
      }
    },
    "education": [{
      "institution": {
        "name": "Aberdeen High School",
        "geolocation": [{
          "longitude": -123.821,
          "latitude": 46.979259
        }]
      },
      "degree": null
    }],
    "social_presence": [],
    "date_of_birth": "1967-02-20",
    "notable": {
      "text": "Celebrity",
      "lang": "en",
      "id": "/celebrities/celebrity",
      "name": "Celebrity"
    }
  };

  var person = person0;
  var qeeme = document.getElementById('qeeme');
  qeeme.width = window.innerWidth;
  qeeme.height = 1285;

  var context = qeeme.getContext('2d');

  var color1 = {
    bg: '#006ea5',
    circleBg: '#063858',
    title: '#84c4dd',
    subtitle: '#fff',
    icon: '#ffe14f'
  };

  var color2 = {
    bg: '#354052',
    circleBg: '#57718d',
    title: '#a7b1c3',
    subtitle: '#6b7788',
    icon: '#43c0b5'
  };

  var color3 = {
    bg: '#ecf2f6',
    circleBg: '#bbe4dd',
    title: '#444756',
    subtitle: '#828b9d',
    icon: '#42c0b5'
  };

  var color4 = {
    bg: '#efefef',
    circleBg: '#2688b5',
    title: '#123d6c',
    subtitle: '#234b76',
    icon: '#295789'
  };

  var color5 = {
    bg: '#f0e9dc',
    circleBg: '#6f5f5c',
    title: '#6f5f5c',
    subtitle: '#b6a380',
    icon: '#cfbfa2'
  };


  var color10 = {
    circleBg: '#',
    title: '#',
    subtitle: '#',
    icon: '#'
  };

  var color = color5;

  color.female = '#db147b';
  color.male = '#0092dd';

  document.querySelector('body').style.background = color.bg;
  document.querySelector('header h1').innerHTML = person.name;

  var addSection = function(icon, position, title) {
    // line before
    context.beginPath();
    context.moveTo(0, position.y);
    context.lineTo((qeeme.width / 2) - 30, position.y);
    context.strokeStyle = color.circleBg;
    context.lineWidth = 1;
    context.stroke();

    // line after
    context.beginPath();
    context.moveTo((qeeme.width / 2) + 30, position.y);
    context.lineTo(qeeme.width, position.y);
    context.strokeStyle = color.circleBg;
    context.lineWidth = 1;
    context.stroke();

    // icon
    context.font = '35px qeeme';
    context.textBaseline = 'top';
    context.fillStyle = color.icon;
    context.fillText(icon, (qeeme.width / 2) - 17, position.y - 15);

    // icon circle
    context.beginPath();
    context.arc((qeeme.width / 2), position.y, 25, 0, Math.PI * 2, false);
    context.closePath();
    context.strokeStyle = color.circleBg;
    context.lineWidth = 5;
    context.stroke();

    // title
    if (!!title) {
      context.font = 'bold 12px Roboto';
      context.textBaseline = 'top';
      context.fillStyle = color.subtitle;
      context.fillText(title, (qeeme.width / 2) - parseInt(context.measureText(
          title).width /
        2), position.y + 30);
    }

  };

  /***********************
    Family
  ************************/

  addSection('a', {
    x: (qeeme.width / 2),
    y: 200
  }, 'Family');

  var loadFamilyImage = function(imageId, position) {
    var familyImage = new Image();
    familyImage.onload = function() {
      context.save();
      context.beginPath();
      var r,
        imgWidth = familyImage.width,
        imgHeight = familyImage.height;
      if (imgWidth < imgHeight) {
        r = imgWidth / 2;
      } else {
        r = imgHeight / 2;
      }

      r = 18;

      var redfx = position.x - 7;
      var redfy = position.y - 5;

      var posx = r + redfx;
      var posy = r + redfy;

      //context.arc(qeeme.width / 2, qeeme.height / 2, r, 0, Math.PI * 2, false);
      context.arc(posx, posy, r, 0, Math.PI * 2, false);

      // Clip to the current path
      context.clip();

      //context.drawImage(personImage, (qeeme.width / 2) - r, (qeeme.height / 2) - r, qeeme.width, qeeme.height);
      context.drawImage(familyImage, redfx, redfy);
      //
      // // Undo the clipping
      context.restore();
    };

    familyImage.src = getImageUrl(imageId, 36);
    return true;
  };

  // children
  var addChild = function(child, i) {
    var firstName = child.name.split(' ')[0];
    var left = (qeeme.width / 2) - 90 - 65 * i;
    var top = 257;
    var iconColor,
      iconLetter;

    if (!!child.gender) {
      iconColor = color[child.gender.toLowerCase()];
      iconLetter = child.gender.toLowerCase() === 'male' ? 'o' : 'n';
    } else {
      iconColor = color.icon;
      iconLetter = 'o';
    }

    if (!child.images || child.images.length === 0 || !loadFamilyImage(
      child.images[0].mid, {
        x: left - 11,
        y: top
      })) {
      // icon
      context.font = '23px qeeme';
      context.textBaseline = 'top';
      context.fillStyle = iconColor;
      context.fillText(iconLetter, left - 11, top);
    }

    // icon circle
    context.beginPath();
    context.arc(left, top + 13, 20, 0, Math.PI * 2, false);
    context.closePath();
    context.strokeStyle = color.circleBg;
    context.lineWidth = 4;
    context.stroke();

    context.font = 'bold 12px Roboto';
    context.textBaseline = 'top';
    context.fillStyle = color.subtitle;
    console.log("text: " + context.measureText(firstName).width);
    context.fillText(firstName, left - parseInt(context.measureText(
        firstName).width /
      2), top + 33);
  };

  var i;

  for (i = 0; i < person.children.length; i++) {
    addChild(person.children[i], i);
  }



  var addParent = function(parent, i) {
    var firstName = parent.name.split(' ')[0];
    var left = (qeeme.width / 2) + 90 + 65 * i;
    var top = 257;

    var iconColor,
      iconLetter;

    if (!!parent.gender) {
      iconColor = color[parent.gender.toLowerCase()];
      iconLetter = parent.gender.toLowerCase() === 'male' ? 'j' : 'i';
    } else {
      iconColor = color.icon;
      iconLetter = 'j';
    }

    if (!!parent.images && parent.images.length > 0) {
      loadFamilyImage(parent.images[0].mid, {
        x: left - 11,
        y: top
      });
    } else {
      // icon
      context.font = '23px qeeme';
      context.textBaseline = 'top';
      context.fillStyle = iconColor;
      context.fillText(iconLetter, left - 11, top);
    }

    // icon circle
    context.beginPath();
    context.arc(left, top + 13, 20, 0, Math.PI * 2, false);
    context.closePath();
    context.strokeStyle = color.circleBg;
    context.lineWidth = 4;
    context.stroke();

    context.font = 'bold 12px Roboto';
    context.textBaseline = 'top';
    context.fillStyle = color.subtitle;
    console.log("text: " + context.measureText(firstName).width);
    context.fillText(firstName, left - parseInt(context.measureText(
        firstName).width /
      2), top + 33);
  };

  for (i = 0; i < person.parents.length; i++) {
    addParent(person.parents[i], i);
  }


  /***********************
    Place of birth
  ************************/
  addSection('e', {
    x: (qeeme.width / 2),
    y: 370
  }, 'Place of Birth');

  // Map place of birth
  var placeOfBirthLat = person.place_of_birth.geolocation.latitude;
  var placeOfBirthLong = person.place_of_birth.geolocation.longitude;
  var mapWidth = qeeme.width;
  if (mapWidth > 200) {
    mapWidth = 200;
  }
  var placeOfBirthMapUrl =
    'http://maps.google.com/maps/api/staticmap?sensor=false&center=' +
    placeOfBirthLat + ',' + placeOfBirthLong + '&zoom=8&size=' + mapWidth + 'x' + mapWidth;
  var placeOfBirthMap = new Image();

  placeOfBirthMap.onload = function() {
    context.save();
    context.beginPath();
    var r,
      imgWidth = placeOfBirthMap.width,
      imgHeight = placeOfBirthMap.height;
    if (imgWidth < imgHeight) {
      r = imgWidth / 2;
    } else {
      r = imgHeight / 2;
    }

    var redfx = (qeeme.width / 2) - (placeOfBirthMap.width / 2);
    var redfy = 430 - 5;

    var posx = r + redfx;
    var posy = r + redfy;

    //context.arc(qeeme.width / 2, qeeme.height / 2, r, 0, Math.PI * 2, false);
    context.arc(posx, posy, r, 0, Math.PI * 2, false);

    // Clip to the current path
    context.clip();

    //context.drawImage(personImage, (qeeme.width / 2) - r, (qeeme.height / 2) - r, qeeme.width, qeeme.height);
    context.drawImage(placeOfBirthMap, redfx, redfy);
    //
    // // Undo the clipping
    context.restore();

    //context.drawImage(imageObj, (qeeme.width / 2) - (imageObj.width / 2), 420);
  };
  placeOfBirthMap.src = placeOfBirthMapUrl;

  // name
  context.font = 'bold 12px Roboto';
  context.textBaseline = 'top';
  context.fillStyle = color.subtitle;
  context.fillText(person.place_of_birth.name, (qeeme.width / 2) - parseInt(
    context.measureText(
      person.place_of_birth.name).width /
    2), 630);

  /***********************
    Education
  ************************/
  addSection('k', {
    x: (qeeme.width / 2),
    y: 760
  }, 'Education');

  // Map place of birth
  var educationLat = person.education[0].institution.geolocation[0].latitude;
  var educationLong = person.education[0].institution.geolocation[0].longitude;

  var educationMapUrl =
    'http://maps.google.com/maps/api/staticmap?sensor=false&center=' +
    educationLat + ',' + educationLong + '&zoom=8&size=' + mapWidth + 'x' + mapWidth;
  var educationMap = new Image();


  educationMap.onload = function() {
    context.save();
    context.beginPath();
    var r,
      imgWidth = educationMap.width,
      imgHeight = educationMap.height;
    if (imgWidth < imgHeight) {
      r = imgWidth / 2;
    } else {
      r = imgHeight / 2;
    }

    var redfx = (qeeme.width / 2) - (educationMap.width / 2);
    var redfy = 830 - 5;

    var posx = r + redfx;
    var posy = r + redfy;

    //context.arc(qeeme.width / 2, qeeme.height / 2, r, 0, Math.PI * 2, false);
    context.arc(posx, posy, r, 0, Math.PI * 2, false);

    // Clip to the current path
    context.clip();

    //context.drawImage(personImage, (qeeme.width / 2) - r, (qeeme.height / 2) - r, qeeme.width, qeeme.height);
    context.drawImage(educationMap, redfx, redfy);
    //
    // // Undo the clipping
    context.restore();

    //context.drawImage(imageObj, (qeeme.width / 2) - (imageObj.width / 2), 420);
  };

  educationMap.src = educationMapUrl;

  // name
  context.font = 'bold 12px Roboto';
  context.textBaseline = 'top';
  context.fillStyle = color.subtitle;
  context.fillText(person.education[0].institution.name, (qeeme.width / 2) -
    parseInt(context.measureText(
        person.education[0].institution.name).width /
      2), 1030);



  var personImage = new Image();

  var headerImage = new Image();

  // When the image is loaded, draw it
  personImage.onload = function() {
    // bg image
    context.beginPath();
    context.arc(57, 75, 55, 0, Math.PI * 2, false);
    context.closePath();
    context.fillStyle = color.circleBg;
    context.fill();

    // title
    context.font = 'bold 20px Roboto';
    context.textBaseline = 'top';
    context.fillStyle = color.title;
    context.fillText(person.name, 100, 110);

    // subtitle
    context.font = 'bold 12px Roboto';
    context.textBaseline = 'top';
    context.fillStyle = color.subtitle;
    context.fillText(person.notable.text, 100, 130);


    // birth / age
    context.font = 'bold 10px Roboto';
    context.textBaseline = 'top';
    context.fillStyle = '#ffffff';
    var dateOfBirth,
      year, month, day, age;
    if (!!person.date_of_birth) {
      var dateOfBirthArr = person.date_of_birth.split('-');
      year = dateOfBirthArr[0];
      month = dateOfBirthArr[1];
      day = dateOfBirthArr[2];
      dateOfBirth = month + '/' + day + '/' + year;
      age = (new Date()).getFullYear() - year;
    }
    if (!!dateOfBirth) {
      context.fillText(dateOfBirth + ' (age ' + age + ')', qeeme.width - 131,
        83);
    }

    // icon
    context.font = '12px qeeme';
    context.textBaseline = 'top';
    context.fillStyle = color.icon;
    context.fillText('l', qeeme.width - 145, 83);

    // living in
    context.font = 'bold 10px Roboto';
    context.textBaseline = 'top';
    context.fillStyle = '#ffffff';

    context.fillText(person.nationality[0], qeeme.width - 131,
      63);
    // icon
    context.font = '14px qeeme';
    context.textBaseline = 'top';
    context.fillStyle = color.icon;
    context.fillText('m', qeeme.width - 145, 62);

    // Save the state, so we can undo the clipping
    context.save();

    // Create a circle
    context.beginPath();
    var r,
      imgWidth = personImage.width,
      imgHeight = personImage.height;
    if (imgWidth < imgHeight) {
      r = imgWidth / 2;
    } else {
      r = imgHeight / 2;
    }
    var redfx = 8;
    var redfy = 25;

    var posx = r + redfx;
    var posy = r + redfy;

    console.log('raio=' + r);
    //context.arc(qeeme.width / 2, qeeme.height / 2, r, 0, Math.PI * 2, false);
    context.arc(posx, posy, r, 0, Math.PI * 2, false);

    // Clip to the current path
    context.clip();

    //context.drawImage(personImage, (qeeme.width / 2) - r, (qeeme.height / 2) - r, qeeme.width, qeeme.height);
    context.drawImage(personImage, redfx, redfy);

    // Undo the clipping
    context.restore();
  };

  // Specify the src to load the image
  var imageMid = '/m/059x99z', // obama
    //var imageMid = '/m/05mcv9y', // kate perry
    //var imageMid = '/m/0hj4q_0', // kate perry 2
    //var imageMid = '/m/0hj4qpd', // kate perry 3
    //var imageMid = '/m/0bndtsn', // Michael jordan
    // var imageMid = '/m/0byjccn', // orianthi
    maxwidth = 100,
    maxheight = 100;

  headerImage.onload = function() {
    if (headerImage.width < qeeme.width && qeeme.width <= 1920) {
      headerImage.src =
        'http://img.wallpaperlist.com/uploads/wallpaper/files/woo/wood-floor-wallpaper-5311f9bde1bf8.jpg';
    } else {
      context.drawImage(headerImage, 0, headerImage.width / 2, headerImage.width,
        100, 0, 0, headerImage.width, 100);
      context.globalAlpha = 0.65;
      context.fillStyle = '#000';
      context.fillRect(0, 0, headerImage.width, 100);
      context.globalAlpha = 1;
      personImage.src = getImageUrl(person.images[0].mid, maxwidth);
    }
  };
  if (!!person.images && person.images.length > 0) {
    headerImage.src = getImageUrl(person.images[0].mid, qeeme.width);
  }
};
var orientation2;
if (window.innerHeight > window.innerWidth) {
  orientation2 = 'portrait';
} else {
  orientation2 = 'landscape';
}


var getImageUrl = function(imageMid, maxwidth) {
  return 'https://www.googleapis.com/freebase/v1/image' + imageMid + '?' +
    'key=AIzaSyCQXvFx7PMLEImgshuRNJ_vlngLBCTVxkA' + '&maxwidth=' + maxwidth;
};

// Check device orientation
if (window.DeviceOrientationEvent) {
  window.addEventListener('deviceorientation', function(event) {
    if ((window.innerHeight > window.innerWidth) && orientation2 ===
      'landscape') {
      orientation2 = 'portrait';
      loadCanvas();
      return;
    }

    if ((window.innerHeight < window.innerWidth) && orientation2 ===
      'portrait') {
      orientation2 = 'landscape';
      loadCanvas();
      return;
    }
  }, true);
}
