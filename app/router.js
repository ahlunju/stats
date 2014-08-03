import Ember from 'ember';

var Router = Ember.Router.extend({
  location: GithubStatENV.locationType
});

Router.map(function() {
  this.resource('statistics');
  this.resource('statistic', {path: "/statistics/:id"}, function() {
    
  });
});

export default Router;
