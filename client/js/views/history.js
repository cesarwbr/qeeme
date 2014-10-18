define(['backbone', 'underscore'], function(Backbone, _) {
  return Backbone.View.extend({
    el: '.listHistory',
    get: function(mid) {
      if (!sessionStorage) {
        return false;
      }

      var personData = sessionStorage.getItem(mid);
      if (!!personData) {
        return JSON.parse(personData);
      } else {
        return false;
      }

    },
    add: function(mid, data) {
      if (!!sessionStorage) {
        data.created = new Date();
        sessionStorage.setItem(mid, JSON.stringify(data));
      }
    },
    render: function() {
      var people = [],
        keys = Object.keys(sessionStorage);

      keys.forEach(function(key) {
        people.push(JSON.parse(sessionStorage.getItem(key)));
      });

      people.sort(function(a, b) {
        return new Date(b.created) - new Date(a.created);
      });

      var template = _.template($('#listHistoryTpl').html());
      var result = template({
        people: people
      });
      this.$el.html(result);
    }
  });
});
