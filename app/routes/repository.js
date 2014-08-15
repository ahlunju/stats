import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var statistic = this.modelFor('statistic');
    var url = 'https://api.github.com/repos/'+statistic.login+'/'+params.name; //reponame is from the router
    console.log(url);
    return Ember.$.getJSON(url);
  }//,
  // serialize: function(model) {
  //   return { reponame: model.get('full_name')};
  // }
});
