import Ember from 'ember';
import DS from 'ember-data';

export default Ember.ArrayController.extend({
  actions : {
    clickMe: function() {
      console.log('hello');
    }
  }
});
