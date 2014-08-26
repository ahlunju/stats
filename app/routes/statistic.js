import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    console.log(params.id);
    //params.id == developer.login in statistics.hbs
    var user = Ember.$.getJSON('https://api.github.com/users/' + params.id+"?client_id=1f8fd211b249522fcde3&client_secret=652cd979e412052650473db8e9beeeccaf1e0d21").then(function(data) {
      console.log(data);
      return data;
    });
    return user;

    // return {
    //           "login": "ahlunju",
    //           "id": 3287446,
    //           "avatar_url": "https://avatars.githubusercontent.com/u/3287446?v=2",
    //           "gravatar_id": "0103ce1e17121c399d3a546d60dbde91",
    //           "url": "https://api.github.com/users/ahlunju",
    //           "html_url": "https://github.com/ahlunju",
    //           "followers_url": "https://api.github.com/users/ahlunju/followers",
    //           "following_url": "https://api.github.com/users/ahlunju/following{/other_user}",
    //           "gists_url": "https://api.github.com/users/ahlunju/gists{/gist_id}",
    //           "starred_url": "https://api.github.com/users/ahlunju/starred{/owner}{/repo}",
    //           "subscriptions_url": "https://api.github.com/users/ahlunju/subscriptions",
    //           "organizations_url": "https://api.github.com/users/ahlunju/orgs",
    //           "repos_url": "https://api.github.com/users/ahlunju/repos",
    //           "events_url": "https://api.github.com/users/ahlunju/events{/privacy}",
    //           "received_events_url": "https://api.github.com/users/ahlunju/received_events",
    //           "type": "User",
    //           "site_admin": false,
    //           "name": "Yalun Zhu",
    //           "company": "",
    //           "blog": "http://yalunzhu.com",
    //           "location": "Brooklyn, NY",
    //           "email": "",
    //           "hireable": true,
    //           "bio": null,
    //           "public_repos": 20,
    //           "public_gists": 0,
    //           "followers": 3,
    //           "following": 8,
    //           "created_at": "2013-01-16T16:34:41Z",
    //           "updated_at": "2014-08-15T02:03:03Z"
    //         };
  }
});

