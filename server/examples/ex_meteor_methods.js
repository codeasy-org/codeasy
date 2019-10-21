Meteor.methods({
  'getDB': function(db_name) {
    //필요한 서버 작업을 수행 후 원하는 값을 return
    return DB.find({db_name: db_name}).fetch();
  }
});