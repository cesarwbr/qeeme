define(['backbone', '../models/person'], function(Backbone, Person) {
  return Backbone.Collection.extend({
    model: Person,
    url: 'http://192.168.1.103:3000/'
  });
});
