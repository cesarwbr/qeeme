define(['backbone', 'collections/people', 'canvas/views/person/main-info',
  'canvas/views/person/family', 'canvas/views/person/place-of-birth',
  'canvas/views/person/education', 'jquery', 'underscore', 'canvas/views/history'
], function(Backbone, People, PersonMainInfo, Family, PlaceOfBirth,
  Education, $, _, History) {
  return Backbone.View.extend({
    events: {
      'click .back': 'search'
    },
    search: function() {
      this.router.navigate('', {
        trigger: true
      });
    },
    initialize: function(router, mid) {
      this.router = router;
      this.color = {
        bg: '#f0e9dc',
        circleBg: '#6f5f5c',
        title: '#6f5f5c',
        subtitle: '#b6a380',
        icon: '#cfbfa2',
        female: '#db147b',
        male: '#0092dd',
        shadow: '#000000'
      };

      this.collection = new People();
      this.history = new History();

      var self = this;

      var personData = this.history.get(mid);

      if (!!personData) {
        self.render(personData);
      } else {
        this.collection.fetch({
          data: {
            mid: mid
          },
          type: 'POST',
          success: function(data, response) {
            self.render(response.result[0]);
            self.history.add(mid, response.result[0]);
          }
        });
      }


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
      document.querySelector('body').style.background = this.color.bg;
      //document.querySelector('header h1').innerHTML = person.name;

      this.qeeme = document.getElementById('qeeme');
      if (window.innerWidth > 1200) {
        this.qeeme.width = window.innerWidth - 256;
      } else {
        this.qeeme.width = window.innerWidth;
      }

      this.qeeme.height = 1035;

      this.context = this.qeeme.getContext('2d');

      this.context.clearRect(0, 0, this.qeeme.width, this.qeeme.height);
      this.qeeme.width = this.qeeme.width;

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

        self.context.globalAlpha = 0.45;
        self.context.fillStyle = self.color.shadow;
        self.context.fillRect(0, 58, self.qeeme.width, 43);
        self.context.globalAlpha = 1;
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

          var ptrn = self.context.createPattern(headerImage,
            'repeat'); // Create a pattern with this image, and set it to "repeat".
          self.context.fillStyle = ptrn;
          self.context.fillRect(0, 0, self.qeeme.width, 100); // context.fillRect(x, y, width, height);

          self.context.globalAlpha = 0.6;
          self.context.fillStyle = self.color.shadow;
          self.context.fillRect(0, 50, self.qeeme.width, 50);
          self.context.globalAlpha = 1;

          callback();
        }
      };

      if (!!person.images && person.images.length > 0) {
        headerImage.src = this.getImageUrl(person.images[0].mid,
          this.qeeme.width);
      } else {
        headerBg.src = 'img/wood.png';
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

      // bg image
      self.context.beginPath();
      self.context.arc(57, 75, 55, 0, Math.PI * 2, false);
      self.context.closePath();
      self.context.fillStyle = self.color.circleBg;
      self.context.fill();

      // When the image is loaded, draw it
      personImage.onload = function() {

        // Save the state, so we can undo the clipping
        self.context.save();

        self.context.imageSmoothingEnabled = true;
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

        self.context.arc(posx, posy, r, 0, Math.PI * 2, false);

        // Clip to the current path
        self.context.clip();

        self.context.drawImage(personImage, redfx, redfy);
        self.context.globalCompositeOperation = 'source-atop';

        // Undo the clipping
        self.context.restore();
        self.context.beginPath();
        self.context.arc(posx, posy, 50, 0, Math.PI * 2, false);
        self.context.lineWidth = 2;
        self.context.strokeStyle = self.color.circleBg;
        self.context.stroke();

      };
      if (!!person.images && person.images.length > 0) {
        personImage.src = this.getImageUrl(person.images[0].mid, 100);
      } else { // no image
        var icon = person.gender.toLowerCase() === 'male' ? 'o' : 'n';
        self.context.font = '58px qeeme';
        self.context.textBaseline = 'top';
        self.context.fillStyle = 'white';
        self.context.fillText(icon, 30, 45);
      }

    }
  });
});
