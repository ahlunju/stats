import Ember from 'ember';

export default Ember.ArrayController.extend({
  
  actions : {
    getUserLogin: function() {
      console.log('the github user you entered:');
      console.log(this);
      console.log(this.get('login'));
    }
  }
});
