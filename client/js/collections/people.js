define(['backbone', '../models/person'], function(Backbone, Person) {
  var People = Backbone.Collection.extend({
    model: Person,
    url: 'http://localhost:3000/'
  });

  return People;
});
