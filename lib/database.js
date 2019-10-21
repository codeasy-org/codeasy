Meteor.users.allow({  //client에서 사용자 정보를 제어 할 수 있도록 추가.
  update: function() {return true;},
  remove: function() {return true;}
});

Mongo.Collection.prototype.finds = function(selector, options) {  //find의 fetch 후 array 반납 함수 finds
  if (!selector) {selector = {}};
  if (!options) {options = {}};
  return this.find(selector, options).fetch();
};

DB = new Mongo.Collection('db'); //예제와 테스트를 위한 데이터베이스
