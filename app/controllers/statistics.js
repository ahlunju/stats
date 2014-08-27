import Ember from 'ember';

export default Ember.ArrayController.extend({
  addedUsers : [],
  actions : {
    getUserLogin: function() {
      var newUser = this.get('login');
      if (newUser) {
        var model = this.get('model');
        var self = this;
        var url = 'https://api.github.com/users/'+newUser;

        if (this.addedUsers.indexOf(newUser) === -1) {
          this.addedUsers.push(newUser); //store the user that has already entered
          console.log(this.addedUsers);
          Ember.$.getJSON(url).then(function(data){
            self.set('githuber', data);
            model.pushObject(data); //make API call and add to the list
          });
          console.log(model);
        }
        this.set('login'); //empty the input field
      }
    }

  }
});
