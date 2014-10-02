define(['backbone'], function(Backbone) {
  var Person = Backbone.Model.extend({
    defaults: {
      "result": [],
      "cursor": false
    }
  });

  return Person;
});
