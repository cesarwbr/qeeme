define(['backbone', 'collections/people'], function(Backbone, People) {
  return Backbone.View.extend({
    initialize: function() {
      this.collection = new People();
      this.collection.fetch({
        data: {
          mid: '/m/01rh0w'
        },
        type: 'POST',
        success: function(data, response) {
          console.log(response);
          this.info = response;
          loadCanvas(response.result[0]);
        }
      });
    }
  });
});
