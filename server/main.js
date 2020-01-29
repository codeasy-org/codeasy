Meteor.startup(function() {
  // {
  //   _id: 키워드
  //   major: 전공명
  // }
  //
  // {
  //   _id: 냅둠
  //   major: 전공명
  //   keyword: 키워드
  // }

  var arr = DB_KEYWORD.findAll()
  arr.forEach(function(keyword){
    DB_KEYWORD.update({_id: keyword._id}, {
      $set: {
        keyword: keyword._id
      }
    })
  })


  // code to run on server at startup
  if (!Meteor.users.findOne({username: 'admin'})) {
    //유저(관리자) 생성 예
    Accounts.createUser({
      username: 'admin',
      email: 'admin@admin.admin',
      password: 'admin!24',
      profile: {
        //이름, 주소 등 원하는 사용자 데이터
        type: 'admin',
        name: '관리자'
      }
    });
  }
  Meteor.methods({
    'remove_keywords': function(major) {
      DB_KEYWORD.remove({major: major});
    }
  })

});

