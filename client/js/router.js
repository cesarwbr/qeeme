define(['backbone', 'views/app', 'views/search'], function(Backbone, AppView,
  SearchView) {
  return Backbone.Router.extend({
    routes: {
      '': 'home',
      'show/m/:id': 'show'
    },
    home: function() {
      var searchView = new SearchView();
      searchView.render(this);
    },
    show: function(id) {
      new AppView(this, '/m/' + id);
    }
  });
});
