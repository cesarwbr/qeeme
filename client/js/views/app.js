define(['backbone', 'collections/people', 'views/person/main-info',
  'views/person/family', 'views/person/place-of-birth',
  'views/person/education'
], function(Backbone, People, PersonMainInfo, Family, PlaceOfBirth,
  Education) {
  return Backbone.View.extend({
    initialize: function() {
      this.color = {
        bg: '#f0e9dc',
        circleBg: '#6f5f5c',
        title: '#6f5f5c',
        subtitle: '#b6a380',
        icon: '#cfbfa2',
        female: '#db147b',
        male: '#0092dd'
      };

      this.collection = new People();
      var self = this;
      this.collection.fetch({
        data: {
          mid: '/m/02mjmr'
        },
        type: 'POST',
        success: function(data, response) {
          console.log(response);
          self.render(response.result[0]);
        }
      });

    },
    renderSections: function(person) {
      var conf = {
        context: this.context,
        person: person,
        color: this.color,
        qeeme: this.qeeme
      };

      conf.top = 200;
      new Family(conf);

      conf.top = 370;
      new PlaceOfBirth(conf);

      conf.top = 700;
      new Education(conf);
    },
    render: function(person) {
      var self = this;
      console.log('rendering...');
      document.querySelector('body').style.background = this.color.bg;
      document.querySelector('header h1').innerHTML = person.name;

      this.qeeme = document.getElementById('qeeme');
      qeeme.width = window.innerWidth;
      qeeme.height = 1285;

      this.context = this.qeeme.getContext('2d');

      this.renderHeader(person, function() {
        self.renderMainPhoto(person);
        self.renderMainInfo(person);
        self.renderSections(person);
      });


    },
    getImageUrl: function(imageMid, maxwidth) {
      return 'https://www.googleapis.com/freebase/v1/image' +
        imageMid + '?' +
        'key=AIzaSyCQXvFx7PMLEImgshuRNJ_vlngLBCTVxkA' + '&maxwidth=' +
        maxwidth;
    },
    renderHeader: function(person, callback) {
      var headerImage = new Image(),
          headerBg = new Image();
      var self = this;

      headerBg.onload = function() {
        var ptrn = self.context.createPattern(headerBg, 'repeat'); // Create a pattern with this image, and set it to "repeat".
        self.context.fillStyle = ptrn;
        self.context.fillRect(0, 0, self.qeeme.width, 100); // context.fillRect(x, y, width, height);
        callback();
      };

      headerImage.onload = function() {
        if (headerImage.width < self.qeeme.width && self.qeeme.width <=
          1920) {
          //headerImage.src = 'http://img.wallpaperlist.com/uploads/wallpaper/files/woo/wood-floor-wallpaper-5311f9bde1bf8.jpg';
          headerBg.src = 'img/wood.png';
        } else {
          self.context.drawImage(headerImage, 0, headerImage.width /
            2,
            headerImage.width,
            100, 0, 0, headerImage.width, 100);
          self.context.globalAlpha = 0.65;
          self.context.fillStyle = '#000';
          self.context.fillRect(0, 0, headerImage.width, 100);
          self.context.globalAlpha = 1;

          var ptrn = self.context.createPattern(headerImage, 'repeat'); // Create a pattern with this image, and set it to "repeat".
          self.context.fillStyle = ptrn;
          self.context.fillRect(0, 0, self.qeeme.width, 100); // context.fillRect(x, y, width, height);
          callback();
        }
      };

      if (!!person.images && person.images.length > 0) {
        headerImage.src = this.getImageUrl(person.images[0].mid, this
          .qeeme
          .width);
      }
    },
    renderMainInfo: function(person) {
      new PersonMainInfo({
        context: this.context,
        person: person,
        color: this.color,
        qeeme: this.qeeme
      });
    },
    renderMainPhoto: function(person) {
      console.log('rendering main info...');
      var self = this;

      var personImage = new Image();

      // title
      self.context.font = 'bold 20px Roboto';
      self.context.textBaseline = 'top';
      self.context.fillStyle = self.color.title;
      self.context.fillText(person.name, 100, 110);

      // subtitle
      self.context.font = 'bold 12px Roboto';
      self.context.textBaseline = 'top';
      self.context.fillStyle = self.color.subtitle;
      self.context.fillText(person.notable.text, 100, 135);

      // When the image is loaded, draw it
      personImage.onload = function() {
        // bg image
        self.context.beginPath();
        self.context.arc(57, 75, 55, 0, Math.PI * 2, false);
        self.context.closePath();
        self.context.fillStyle = self.color.circleBg;
        self.context.fill();

        // Save the state, so we can undo the clipping
        self.context.save();

        // Create a circle
        self.context.beginPath();
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
        //self.context.arc(qeeme.width / 2, qeeme.height / 2, r, 0, Math.PI * 2, false);
        self.context.arc(posx, posy, r, 0, Math.PI * 2, false);

        // Clip to the current path
        self.context.clip();

        //self.context.drawImage(personImage, (qeeme.width / 2) - r, (qeeme.height / 2) - r, qeeme.width, qeeme.height);
        self.context.drawImage(personImage, redfx, redfy);

        // Undo the clipping
        self.context.restore();
      };

      personImage.src = this.getImageUrl(person.images[0].mid, 100);

    }
  });
});
