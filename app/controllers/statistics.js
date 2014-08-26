import Ember from 'ember';

export default Ember.ArrayController.extend({
  actions : {
    getUserLogin: function() {
      console.log(this.get('model')); //the statistics model is an array of githubers
      if (this.get('login')) {
        var model = this.get('model');
        var self = this;
        var url = 'https://api.github.com/users/'+this.get('login');
        Ember.$.getJSON(url).then(function(data){
          self.set('githuber', data);
          model.pushObject(data); //make API call and add to the list
        });
      }
    }
  }
});
