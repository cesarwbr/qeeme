define(['backbone', 'jquery', 'underscore', 'views/app'], function(Backbone, $,
  _, AppView) {
  return Backbone.View.extend({
    render: function(router) {
      var that = this;
      this.router = router;

      var element = $('#search-element')[0];
      element.addEventListener('result', function(result) {
        that.mid = result.detail.mid;
        that.router.navigate(that.mid, {
          trigger: true
        });
        var mainPanel = $('#main-panel')[0];
        mainPanel.closeDrawer();
      });
    }
  });
});
