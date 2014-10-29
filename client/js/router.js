define(['backbone', 'canvas/views/app', 'canvas/views/search', 'canvas/views/history'], function(Backbone, AppView,
  SearchView, HistoryView) {

  return Backbone.Router.extend({
    routes: {
      '': 'home',
      'm/:id': 'home'
    },
    home: function(id) {
      var historyView = new HistoryView();
      historyView.render();

      var searchView = new SearchView();
      searchView.render(this);

      var mainPanel = $('#main-panel')[0];

      if(!!mainPanel.closeDrawer) {
          mainPanel.closeDrawer();
      }

      if (!!id) {
        new AppView(this, '/m/' + id);
      } else {
        new AppView(this, '/m/02mjmr');
      }
    }
  });
});
