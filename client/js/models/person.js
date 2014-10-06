define(['backbone'], function(Backbone) {
  return Backbone.Model.extend({
    defaults: {
      "result": [],
      "cursor": false
    }
  });
});
