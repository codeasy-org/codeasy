Meteor.methods({
  'getParams': function(param1, param2) {
    /* Meteor Methods 기본 호출 예제
      Meteor.call('getParams', {key1: 'param1 is object'}, 'param2 is string', function(err, rslt) {
        if (err) {  // 요청에 대한 에러 응답 처리
          console.log(err);
        } else {  // 요청에 대한 정상 응답 처리
          console.log(rslt);
        }
      });
    */
    return {  // 요청 전달 params 들을 그대로 return 하는 예
      param1: param1,
      param2: param2
    }
  },
  'getDB': function(db_name) {
    /*  Meteor Methods DB 호출 예제
      Meteor.call('getDB', 'ex_content', function(err, rslt) {
        if (err) {  // 요청에 대한 에러 응답 처리
          console.log(err);
        } else {  // 요청에 대한 정상 응답 처리
          console.log(rslt);
        }
      });
    */
    return DB('example').findAll({db_name: db_name}); // DB에서 db_name에 일치하는 값의 Array 반환하는 예
  }
});


