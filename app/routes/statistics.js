import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    var url = 'https://api.github.com/users/ahlunju';
    var developers = [
      { name:'Carlos Ar', login: 'carlitosspot'},
      { name:'Richard Heras', login: 'Richardheras'},
      { name:'David Balogun', login: 'webdev34'}
    ];
    return developers;
  }
});
