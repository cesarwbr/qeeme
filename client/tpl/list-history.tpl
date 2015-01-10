<% _.each(people, function(person) { %>
  <core-item icon="account-circle" label="<%= person.name %>" horizontal center layout>
    <a href="#<%= person.mid %>"></a>
  </core-item>
<% }); %>
