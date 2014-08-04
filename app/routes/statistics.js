import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    var developers = [
      { name: 'Yalun Zhu', id: 'ahlunju'},
      { name:'Carlos Ar', id: 'carlitosspot'},
      { name:'Richard Heras', id: 'Richardheras'},
      { name:'David Balogun', id: 'webdev34'}
    ];

    return developers;
  }
});
