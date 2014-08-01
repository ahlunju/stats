import Ember from 'ember';

var Router = Ember.Router.extend({
  location: GithubStatENV.locationType
});

Router.map(function() {
  this.route('statistics');
});

export default Router;
