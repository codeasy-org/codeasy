Meteor.methods({
  'getParams': function(param1, param2) {
    // 전달 받은 params를 통해 원하는 서버 작업을 수행
    return {  // 요청 전달 params 들을 그대로 return 하는 예제
      param1: param1,
      param2: param2
    }
  },
  'getDB': function(db_name) {
    // 필요한 서버 작업을 수행 후 원하는 값을 return
    return DB.finds({db_name: db_name}); // DB에서 db_name에 일치하는 값의 Array 반환
  },
  // 'getUsers': function()
});

// Meteor Methods 호출 예제
Meteor.call('getParams', {key1: 'param1 is object'}, 'param2 is string', function(err, rslt) {
  if (err) {  // 요청에 대한 에러 응답 처리
    console.log(err);
  } else {  // 요청에 대한 정상 응답 처리
    console.log(rslt);
  }
});

Meteor.call('getDB', 'ex_content', function(err, rslt) {
  if (err) {  // 요청에 대한 에러 응답 처리
    console.log(err);
  } else {  // 요청에 대한 정상 응답 처리
    console.log(rslt);
  }
});