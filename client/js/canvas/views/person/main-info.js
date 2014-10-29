define(['backbone'], function(Backbone) {
  return Backbone.View.extend({
    initialize: function(obj) {
      this.context = obj.context;
      this.color = obj.color;
      this.qeeme = obj.qeeme;
      this.render(obj.person);
    },
    render: function(person) {
      this.renderBirthAge(person);
      this.renderLivein(person);
    },
    renderBirthAge: function(person) {
      // birth / age
      this.context.font = 'bold 10px Roboto';
      this.context.textBaseline = 'top';
      this.context.fillStyle = '#ffffff';
      var dateOfBirth,
        year, month, day, age;
      if (!!person.date_of_birth) {
        var dateOfBirthArr = person.date_of_birth.split('-');
        year = dateOfBirthArr[0];
        month = dateOfBirthArr[1];
        day = dateOfBirthArr[2];
        dateOfBirth = month + '/' + day + '/' + year;
        age = (new Date()).getFullYear() - year;
      }

      if (!!dateOfBirth) {
        this.context.fillText(dateOfBirth + ' (age ' + age + ')', this.qeeme.width - 131,
          83);
      }

      // icon
      this.context.font = '12px qeeme';
      this.context.textBaseline = 'top';
      this.context.fillStyle = this.color.icon;
      this.context.fillText('l', this.qeeme.width - 145, 83);
    },
    renderLivein: function(person) {
      // living in
      this.context.font = 'bold 10px Roboto';
      this.context.textBaseline = 'top';
      this.context.fillStyle = '#ffffff';

      this.context.fillText(person.nationality[0], this.qeeme.width - 131,
        63);
      // icon
      this.context.font = '14px qeeme';
      this.context.textBaseline = 'top';
      this.context.fillStyle = this.color.icon;
      this.context.fillText('m', this.qeeme.width - 145, 62);
    }
  });
});
