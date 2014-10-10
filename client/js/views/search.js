define(['backbone', 'jquery', 'underscore'], function(Backbone, $, _) {
  return Backbone.View.extend({
    el: '.page',
    events: {
      'submit .search-form': 'search'
    },
    search: function() {
      console.log('searching....');

      this.router.navigate('show' + this.mid, {trigger:true});
    },
    render: function(router) {
      var that = this;
      this.router = router;
      var template = _.template($('#search').html());
      this.$el.html(template);

      var element = $('#search-element')[0];
      element.addEventListener('result', function(result) {
        that.mid = result.detail.mid;
      });
    }
  });
});
