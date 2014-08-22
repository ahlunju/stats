import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    var url = 'https://api.github.com/users/ahlunju'
    var developers = [
      { name:'Carlos Ar', login: 'carlitosspot'},
      { name:'Richard Heras', login: 'Richardheras'},
      { name:'David Balogun', login: 'webdev34'}
    ];
    var data = Ember.$.getJSON(url).done(function(data) {
      console.log(data);
      developers[developers.length] = data; //add ahlunju from API to developer array; doesn't work
    });
    return developers;
  }
});
