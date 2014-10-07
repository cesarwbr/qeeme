define(['backbone', 'views/section-helper'], function(Backbone, SectionHelper) {
  var Education = Backbone.View.extend({
    initialize: function(options) {
      this.positionX = options.qeeme.width / 2;
      this.positionY = options.top;
      this.options = options;
      this.render();
    },
    render: function() {
      this.options.position = {
        x: this.positionX,
        y: this.positionY
      };
      this.options.title = 'Education';
      this.options.icon = 'k';
      this.addSection(this.options);

      var education = this.options.person.education;

      if (education.length > 0 && education[0].institution.geolocation
        .length > 0) {
        var lat = education[0].institution.geolocation[0].latitude,
          long = education[0].institution.geolocation[0].longitude,
          conf = {
            lat: lat,
            long: long,
            width: this.options.qeeme.width,
            ctx: this.options.context,
            qWith: this.options.qeeme.width,
            positionY: this.positionY
          },
          title = {
            name: education[0].institution.name,
            color: this.options.color.subtitle
          };

        this.renderMap(conf, title);
      }
    }
  });

  _.extend(Education.prototype, SectionHelper);

  return Education;
});
