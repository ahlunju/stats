import Ember from 'ember';
// import DS from 'ember-data';

export default Ember.Route.extend({
  model: function(params) {
    return Ember.$.getJSON('https://api.github.com/users/' + params.id+"?client_id=1f8fd211b249522fcde3&client_secret=652cd979e412052650473db8e9beeeccaf1e0d21");
  }
});

