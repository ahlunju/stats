import Ember from 'ember';
// import DS from 'ember-data';

export default Ember.Route.extend({
  model: function(params) {
    return Ember.$.getJSON('https://api.github.com/users/' + params.id);
  //   var data = {
  //     "login": "ahlunju",
  //     "id": 3287446,
  //     "avatar_url": "https://avatars.githubusercontent.com/u/3287446?v=1",
  //     "gravatar_id": "0103ce1e17121c399d3a546d60dbde91",
  //     "url": "https://api.github.com/users/ahlunju",
  //     "html_url": "https://github.com/ahlunju",
  //     "followers_url": "https://api.github.com/users/ahlunju/followers",
  //     "following_url": "https://api.github.com/users/ahlunju/following{/other_user}",
  //     "gists_url": "https://api.github.com/users/ahlunju/gists{/gist_id}",
  //     "starred_url": "https://api.github.com/users/ahlunju/starred{/owner}{/repo}",
  //     "subscriptions_url": "https://api.github.com/users/ahlunju/subscriptions",
  //     "organizations_url": "https://api.github.com/users/ahlunju/orgs",
  //     "repos_url": "https://api.github.com/users/ahlunju/repos",
  //     "events_url": "https://api.github.com/users/ahlunju/events{/privacy}",
  //     "received_events_url": "https://api.github.com/users/ahlunju/received_events",
  //     "type": "User",
  //     "site_admin": false,
  //     "name": "Yalun Zhu",
  //     "company": "",
  //     "blog": "",
  //     "location": "Brooklyn, NY",
  //     "email": "",
  //     "hireable": true,
  //     "bio": null,
  //     "public_repos": 19,
  //     "public_gists": 0,
  //     "followers": 2,
  //     "following": 7,
  //     "created_at": "2013-01-16T16:34:41Z",
  //     "updated_at": "2014-08-03T03:41:31Z"
  //   };
  // return data;
  }
});

