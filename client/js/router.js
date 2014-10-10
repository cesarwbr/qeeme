define(['backbone', 'views/app'], function(Backbone, AppView) {
  return Backbone.Router.extend({
    routes: {
      '': 'home',
      'show': 'show'
    },
    home: function() {
      new AppView();
    },
    show: function() {
      new AppView();
    }
  });
});
