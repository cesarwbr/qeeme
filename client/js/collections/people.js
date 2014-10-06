define(['backbone', '../models/person'], function(Backbone, Person) {
  return Backbone.Collection.extend({
    model: Person,
    url: 'http://localhost:3000/'
  });
});
