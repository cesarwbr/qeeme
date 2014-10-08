define(['backbone', 'views/app'], function(Backbone, AppView) {
  return Backbone.Router.extend({
    routes: {
      '': 'home'
    },
    home: function() {
      new AppView();
    }
  });
});
