define(['backbone', 'underscore'], function(Backbone, _) {
  return Backbone.View.extend({
    el: '.listHistory',
    render: function() {
      var people = [],
          keys = Object.keys(sessionStorage);

      keys.forEach(function(key) {
        people.push(JSON.parse(sessionStorage.getItem(key)));
      });

      var template = _.template($('#listHistoryTpl').html());
      var result = template({people:people});
      this.$el.html(result);
    }
  });
});
