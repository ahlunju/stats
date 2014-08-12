import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    // var statistic = this.modelFor('statistic');
    // var url = 'https://api.github.com/repos/'+statistic.login+'/'+params.reponame; //reponame is from the router
    // return Ember.$.getJSON(url);
  },
  serialize: function(model) {
    return { repo_name: model.get('name')};
  }
});
