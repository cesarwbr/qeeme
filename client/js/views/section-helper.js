define(function() {
  return {
    addSection: function(obj) {
      // line before
      obj.context.beginPath();
      obj.context.moveTo(0, obj.position.y);
      obj.context.lineTo((qeeme.width / 2) - 30, obj.position.y);
      obj.context.strokeStyle = obj.color.circleBg;
      obj.context.lineWidth = 1;
      obj.context.stroke();

      // line after
      obj.context.beginPath();
      obj.context.moveTo((qeeme.width / 2) + 30, obj.position.y);
      obj.context.lineTo(qeeme.width, obj.position.y);
      obj.context.strokeStyle = obj.color.circleBg;
      obj.context.lineWidth = 1;
      obj.context.stroke();

      // icon
      obj.context.font = '35px qeeme';
      obj.context.textBaseline = 'top';
      obj.context.fillStyle = obj.color.icon;
      obj.context.fillText(obj.icon, (qeeme.width / 2) - 17, obj.position
        .y - 15);

      // icon circle
      obj.context.beginPath();
      obj.context.arc((qeeme.width / 2), obj.position.y, 25, 0, Math.PI *
        2, false);
      obj.context.closePath();
      obj.context.strokeStyle = obj.color.circleBg;
      obj.context.lineWidth = 5;
      obj.context.stroke();

      // title
      if (!!obj.title) {
        obj.context.font = 'bold 12px Roboto';
        obj.context.textBaseline = 'top';
        obj.context.fillStyle = obj.color.subtitle;
        obj.context.fillText(obj.title, (qeeme.width / 2) - parseInt(obj.context
          .measureText(
            obj.title).width /
          2), obj.position.y + 30);
      }
    },
    renderMap: function(conf, title) {

      if (conf.width > 200) {
        conf.width = 200;
      }

      var url =
        'http://maps.google.com/maps/api/staticmap?sensor=false&center=' +
        conf.lat + ',' + conf.long + '&zoom=8&size=' + conf.width +
        'x' + conf.width;

      var mapImage = new Image();

      mapImage.onload = function() {
        conf.ctx.save();
        conf.ctx.beginPath();
        var r,
          imgWidth = mapImage.width,
          imgHeight = mapImage.height;
        if (imgWidth < imgHeight) {
          r = imgWidth / 2;
        } else {
          r = imgHeight / 2;
        }

        var redfx = (conf.qWith / 2) - (mapImage.width / 2);
        var redfy = conf.positionY + 65;

        var posx = r + redfx;
        var posy = r + redfy;

        conf.ctx.arc(posx, posy, r, 0, Math.PI * 2, false);

        // Clip to the current path
        conf.ctx.clip();
        conf.ctx.drawImage(mapImage, redfx, redfy);

        // Undo the clipping
        conf.ctx.restore();
      };

      mapImage.src = url;

      if (!!title) {
        conf.ctx.font = 'bold 12px Roboto';
        conf.ctx.textBaseline = 'top';
        conf.ctx.fillStyle = title.color;
        conf.ctx.fillText(title.name, (conf.qWith / 2) -
          parseInt(conf.ctx.measureText(title.name).width / 2), conf.positionY + 270);
      }


    }
  };
});
