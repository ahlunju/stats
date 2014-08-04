import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var statistic = this.modelFor('statistic');
    return Ember.$.getJSON(statistic.repos_url);
  }
});
