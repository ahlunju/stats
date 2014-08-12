import Ember from 'ember';

export default Ember.Controller.extend({
  repoName : function() {
    return this.get('name');
  }.property('name')
});
