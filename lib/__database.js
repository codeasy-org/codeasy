Meteor.users.allow({  //client에서 사용자 정보를 제어 할 수 있도록 추가.
  update: function() {return true;},
  remove: function() {return true;}
});

Mongo.Collection.prototype.findAll = function(selector, options) {  //find의 fetch 후 array 반납 함수
  if (!selector) {selector = {}};
  if (!options) {options = {}};
  _.extend(options, {limit: 1000});   //priority on last element. min-limit for unlimited using.
  return this.find(selector, options).fetch();
};

