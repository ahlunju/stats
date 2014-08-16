import Ember from 'ember';

export default Ember.ObjectController.extend({
  repoId : function() {
    return this.get('id');
  }.property('id')
});
