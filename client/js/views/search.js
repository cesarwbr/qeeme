define(['backbone', 'jquery', 'underscore', 'views/app'], function(Backbone, $,
  _, AppView) {
  return Backbone.View.extend({
    el: '.page',
    events: {
      'submit .search-form': 'search'
    },
    search: function() {
      console.log('searching....');

      this.router.navigate('show' + this.mid, {
        trigger: true
      });
    },
    render: function(router) {
      var that = this;
      this.router = router;

      var element = $('#search-element')[0];
      element.addEventListener('result', function(result) {
        that.mid = result.detail.mid;
        //new AppView(this, result.detail.mid);
        that.router.navigate(that.mid, {
          trigger: true
        });
        var mainPanel = $('#main-panel')[0];
        mainPanel.closeDrawer();
      });
    }
  });
});
