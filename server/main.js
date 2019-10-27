Meteor.methods({
  savePost: function(obj, b_data) {
    //b_data 로 하고 싶은거 여기서 하면 된다.
    // console.log(obj, b_data);
    DB_POSTS.insert(obj);
    return '성공했슴.'
  },
  mirror: function(obj) {
    ///
    return obj;
  }
});

Meteor.startup(function() {
  // code to run on server at startup
});
