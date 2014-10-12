define(['backbone', 'views/app'], function(Backbone, AppView) {

  return Backbone.Router.extend({
    routes: {
      '': 'home',
      'm/:id': 'home'
    },
    home: function(id) {
      if (!!id) {
        new AppView(this, '/m/' + id);
      } else {
        new AppView(this, '/m/02mjmr');
      }
    }
  });
});
