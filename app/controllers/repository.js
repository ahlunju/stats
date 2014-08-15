import Ember from 'ember';

export default Ember.ObjectController.extend({
  repoName : function() {
    return this.get('repo_name');
  }.property('repo_name')
});
