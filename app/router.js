import Ember from 'ember';

var Router = Ember.Router.extend({
  location: GithubStatENV.locationType
});

Router.map(function() {
  this.resource('statistics');
  this.resource('statistic', {path: "/statistics/:id"}, function() {
    this.resource('repositories', function() {
      this.resource('repository');
    });
    // this.resource('repository',{path: '/repositories/:reponame'});
    this.resource('gists');
    this.resource('stars');
  });
});

export default Router;
