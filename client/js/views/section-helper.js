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
      obj.context.fillText(obj.icon, (qeeme.width / 2) - 17, obj.position.y - 15);

      // icon circle
      obj.context.beginPath();
      obj.context.arc((qeeme.width / 2), obj.position.y, 25, 0, Math.PI * 2, false);
      obj.context.closePath();
      obj.context.strokeStyle = obj.color.circleBg;
      obj.context.lineWidth = 5;
      obj.context.stroke();

      // title
      if (!!obj.title) {
        obj.context.font = 'bold 12px Roboto';
        obj.context.textBaseline = 'top';
        obj.context.fillStyle = obj.color.subtitle;
        obj.context.fillText(obj.title, (qeeme.width / 2) - parseInt(obj.context.measureText(
            obj.title).width /
          2), obj.position.y + 30);
      }
    }
  };
});