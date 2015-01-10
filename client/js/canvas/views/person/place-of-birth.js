define(['backbone', 'canvas/views/section-helper'], function(Backbone, SectionHelper) {
  var PlaceOfBirth = Backbone.View.extend({
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
      this.options.title = 'Place of Birth';
      this.options.icon = 'e';
      this.addSection(this.options);

      var lat = this.options.person.place_of_birth.geolocation.latitude;
      var long = this.options.person.place_of_birth.geolocation.longitude;
      var conf = {
        lat: lat,
        long: long,
        width: this.options.qeeme.width,
        ctx: this.options.context,
        qWith: this.options.qeeme.width,
        positionY: this.positionY
      };

      var title = {
        name: this.options.person.place_of_birth.name,
        color: this.options.color.subtitle
      };

      this.renderMap(conf, title);
    }
  });

  _.extend(PlaceOfBirth.prototype, SectionHelper);

  return PlaceOfBirth;
});
