define(['backbone', 'collections/people'], function(Backbone, People) {
  var App = Backbone.View.extend({
    initialize: function() {
      this.collection = new People();
      this.collection.fetch({
        data: {
          mid: '/m/01rh0w'
        },
        type: 'POST',
        success: function(data, response) {
          console.log(response);
          loadCanvas(response.result[0]);
        }
      });
      this.render();
    },
    render: function() {
      this.collection.each(function(item) {
        console.log(item);
      }, this);
    }
  });

  return App;
});
