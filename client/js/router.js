define(['backbone', 'views/app', 'views/search'], function(Backbone, AppView,
  SearchView) {

  return Backbone.Router.extend({
    routes: {
      '': 'home',
      'm/:id': 'home'
    },
    home: function(id) {
      var searchView = new SearchView();
      searchView.render(this);
      if (!!id) {
        new AppView(this, '/m/' + id);
      } else {
        new AppView(this, '/m/02mjmr');
      }
    }
  });
});
