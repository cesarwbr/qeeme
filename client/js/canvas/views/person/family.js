define(['backbone', 'canvas/views/section-helper'], function(Backbone, SectionHelper) {
  var Family = Backbone.View.extend({
    initialize: function(options) {
      this.positionX = options.qeeme.width / 2;
      this.positionY = options.top;
      this.imageSize = 36;
      this.ctx = options.context;
      this.options = options;
      this.render();
    },
    render: function() {
      this.options.position = {
        x: this.positionX,
        y: this.positionY
      };
      this.options.title = 'Family';
      this.options.icon = 'a';
      this.addSection(this.options);

      var parents = this.options.person.parents,
          children = this.options.person.children;

      if (!!parents && parents.length > 0) {
          this.renderPeople({
            title: 'Parents',
            getTitleLeft: function(subtitle, posX, memberLen, imageSize, ctx) {
              return posX + 90 + ((memberLen * imageSize) / 2) - parseInt(ctx.measureText(subtitle).width / 2);
            },
            getIconLetter: function(gender) {
              return gender.toLowerCase() === 'male' ? 'j' : 'i';
            },
            getPhotoLeft: function(options, i) {
              return (options.qeeme.width / 2) + 90 + 65 * i;
            },
            iconLetter: 'j',
            members: parents
          });
      }

      if (!!children && children.length > 0) {
        this.renderPeople({
          title: 'Children',
          getTitleLeft: function(subtitle, posX, memberLen, imageSize, ctx) {
            return posX - 90 - ((memberLen * imageSize) / 2) - parseInt(ctx.measureText(subtitle).width / 2);
          },
          getIconLetter: function(gender) {
            return gender.toLowerCase() === 'male' ? 'o' : 'n';
          },
          getPhotoLeft: function(options, i) {
            return (options.qeeme.width / 2) - 90 - 65 * i;
          },
          iconLetter: 'o',
          members: children
        });
      }

    },
    renderSubtitle: function(positionX, subtitle) {
      this.ctx.font = 'bold 14px Roboto';
      this.ctx.textBaseline = 'top';
      this.ctx.fillStyle = this.options.color.title;
      this.ctx.fillText(subtitle, positionX, this.positionY + 10);
    },
    renderPeople: function(people) {
      var self = this,
          top = this.positionY + 57,
          subtitle = people.title,
          membersTotal = people.members.length,
          titlePeopleX =  people.getTitleLeft(subtitle, this.positionX, membersTotal, this.imageSize, this.ctx);

      this.renderSubtitle(titlePeopleX, subtitle);

      people.members.forEach(function(member, i) {
        var firstName = member.name.split(' ')[0],
            left = people.getPhotoLeft(self.options, i),
            position = {top: top, left: left},
            iconColor,
            iconLetter;

        self.renderName(self.options.color.subtitle, position, firstName);

        if (!!member.gender) {
          iconColor = self.options.color[member.gender.toLowerCase()];
          iconLetter = people.getIconLetter(member.gender);
        } else {
          iconColor = self.options.color.icon;
          iconLetter = people.iconLetter;
        }

        if (!!member.images && member.images.length > 0) {
          self.renderPhoto(member.images[0].mid, {
            x: left - 11,
            y: top
          });
        } else {
          // icon
          self.renderIconPhoto(iconColor, iconLetter, position);
        }
        self.renderPhotoBg(self.options.color.circleBg, position);
      });
    },
    renderPhoto: function(imageId, position) {
      var self = this,
          familyImage = new Image();

      familyImage.onload = function() {
        self.ctx.save();
        self.ctx.beginPath();
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

        self.ctx.arc(posx, posy, r, 0, Math.PI * 2, false);

        // Clip to the current path
        self.ctx.clip();

        self.ctx.drawImage(familyImage, redfx, redfy);

        // Undo the clipping
        self.ctx.restore();

        self.ctx.restore();
        self.ctx.beginPath();
        self.ctx.arc(posx, posy, r, 0, Math.PI * 2, false);
        self.ctx.lineWidth = 2;
        self.ctx.strokeStyle =  self.options.color.circleBg;
        self.ctx.stroke();
      };

      familyImage.src = this.getImageUrl(imageId, self.imageSize);
      return true;
    },
    getImageUrl: function(imageMid, maxwidth) {
      return 'https://www.googleapis.com/freebase/v1/image' +
        imageMid + '?' +
        'key=AIzaSyCQXvFx7PMLEImgshuRNJ_vlngLBCTVxkA' + '&maxwidth=' +
        maxwidth;
    },
    renderIconPhoto: function(iconColor, iconLetter, position) {
      this.ctx.font = '23px qeeme';
      this.ctx.textBaseline = 'top';
      this.ctx.fillStyle = iconColor;
      this.ctx.fillText(iconLetter, position.left - 11, position.top);
    },
    renderPhotoBg: function(circleColor, position) {
      this.ctx.beginPath();
      this.ctx.arc(position.left, position.top + 13, 20, 0, Math.PI * 2, false);
      this.ctx.closePath();
      this.ctx.strokeStyle = circleColor;
      this.ctx.lineWidth = 4;
      this.ctx.stroke();
    },
    renderName: function(color, position, firstName) {
      this.ctx.font = 'bold 12px Roboto';
      this.ctx.textBaseline = 'top';
      this.ctx.fillStyle = color;
      this.ctx.fillText(firstName, position.left - parseInt(this.ctx.measureText(
          firstName).width /
        2), position.top + 42);
    }
  });

  _.extend(Family.prototype, SectionHelper);

  return Family;
});
