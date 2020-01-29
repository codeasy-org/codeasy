// 1. 회원가입 시 기존 회원 있는지 확인 후 가입
if(!DB_USER.findOne({username: 'new user5'})) {
  DB_USER.insert({
    username: 'new user5',
    password: 'nicejin123',
    email: [
      'email@gmail.com',
      'first@gmail.com',
      'second@gmail.com'
    ],
    성별: '남자',
    나이: 43,
    새로운오브젝트: {
      원하는값을: '넣을 수 있는 것이'
    }
  })
}
// 2. 데이터 타입이 달라도 해당되는 조건의 데이터들만 추려져서 나옴.
// console.log(DB_USER.findAll({성별: '남자'}));

// 3. Array 안에 포함 된 데이터 검색
// console.log(DB_USER.findAll({email: 'first@gmail.com'}))


// 4. 프로젝트 데이터 모델 만들어보기
//가상데이터: 지역 카테고리를 가지고 있는 여행 포스트
// var sample_data = {
//   제목: '포스트 제목',
//   본문: '여기에 본문 내용이 엄청 들어가겠지',
//   지역: '부산',
//   태그: '봄',
// }
//
// for(var i = 0; i < 100; i++) {
//   sample_data.조회수 = i;
//   sample_data.createdAt = new Date();
//   DB_TRAVEL.insert(sample_data)
// }



//정렬: 저장된 시간순 혹은 역순
//갯수제한: 현재 화면에 10개 30개
//숫자의 크기비교




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

  // var arr = DB_KEYWORD.findAll()
  // arr.forEach(function(keyword){
  //   DB_KEYWORD.update({_id: keyword._id}, {
  //     $set: {
  //       keyword: keyword._id
  //     }
  //   })
  // })


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

