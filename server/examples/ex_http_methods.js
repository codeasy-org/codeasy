HTTP.methods({  //서버 REST API 구축
  'getUsers': function(param1, param2) {
    var users = Meteor.users.find().fetch();  //사용자 DB
    return `<pre>${users}</pre>`;
    // return `<pre>${JSON.stringify(Meteor.users.find().fetch(), null, 2)}</pre>`
    // return JSON.stringify(JSON.parse(Meteor.users.find().fetch()));
  }
});