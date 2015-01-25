import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('statistics');
  this.resource('statistic', {path: "/statistics/:id"}, function() {
    this.resource('repositories', {path: '/'}); //use repository route when no route is provided
    this.resource('repositories', function(){
      this.resource('repository',{path: "/:name"});
    });
    this.resource('gists');
    this.resource('stars');
    this.resource('friends');
  });

});

export default Router;
