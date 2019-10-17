Meteor.users.allow({  //client에서 사용자 정보를 제어 할 수 있도록 추가.
  update: function() {return true;},
  remove: function() {return true;}
})