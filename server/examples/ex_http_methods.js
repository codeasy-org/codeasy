HTTP.methods({  //모바일이나 이기종 간 통신을 위한 서버 REST API 구축 예제
  // GET methods example
  'getParams/:param1/:param2': function() { // URL뒤에 '/'로 구분 된 param 전달 방식
    // Test방법: 브라우에저에 다음과 같이 호출. http://localhost:3000/getParams/SomeData1/Somedata2
    this.setContentType('application/json');
    return {  // 요청 시 전달 받은 값을 클라이언트에 JSON 형태로 그대로 반환하는 예
      param1: this.params.param1,
      param2: this.params.param2
    }
  },
  'getQuery': function() {  //URL뒤에 ?key=val로 구분 된 query 전달 방식
    // Test방법: 브라우저에 다음과 같이 호출. http://localhost:3000/getQuery?query1=SomeData1&query2=SomeData2
    this.setContentType('application/json');
    return {  // 요청 시 전달 받은 값을 클라이언트에 JSON 형태로 그대로 반환하는 예
      query1: this.query.query1,
      query2: this.query.query2
    }
  },
  //POST methods example
  'postData': function(data) {  // URL뒤에 '/'로 구분 된 param 전달 방식
    // Test방법: 브라우저 콘솔에서 다음과 같이 호출.
    // HTTP.post('http://localhost:3000/postData', {data: {key1: 'val1', key2: 'val2'}}, function(err, rslt) {console.log(err || rslt)});
    this.setContentType('application/json');
    return data;  // 요청 시 전달 받은 값을 클라이언트에 JSON 형태로 그대로 반환하는 예
  }
});