FlowRouter.template('/', 'main');

Template.main.onRendered(function() {
  // 화면이 그려지고 난 후 제일 먼저 수행
  Session.set('count', 0);
});

Template.main.helpers({
  // 화면에 데이터를 전달
  count: function() {
    var count = Session.get('count');
    if (!count) {
      return 'Click!';
    } else {
      return 'Count: ' + count;
    }
  },
  // travels: function() {
  //   //검색된 함수를 활용해서 날짜 포맷 변환
  //   function getFormatDate(date){
  //     var year = date.getFullYear();                                 //yyyy
  //     var month = (1 + date.getMonth());                     //M
  //     month = month >= 10 ? month : '0' + month;     // month 두자리로 저장
  //     var day = date.getDate();                                        //d
  //     day = day >= 10 ? day : '0' + day;                            //day 두자리로 저장
  //     return  year + '' + month + '' + day;
  //   }
  //
  //   var arr = DB_TRAVEL.findAll();
  //   for(var i = 0; i < arr.length; i++) {
  //     arr[i].createdAt = getFormatDate(arr[i].createdAt)
  //   }
  //   return arr;
  // },

  // travels: function() {
  //   // 예제에 포함된 내장 date 함수를 활용한 변환.
  //   var arr = DB_TRAVEL.findAll();
  //   //1. for문을 이용한 iteration
  //   // for(var i = 0; i < arr.length; i++) {
  //   //   arr[i].createdAt = arr[i].createdAt.toStringYMDHMS();
  //   // }
  //
  //   //2. forEach 함수를 이용한 iteration
  //   arr.forEach(function(obj) {
  //     obj.createdAt = obj.createdAt.toStringYMDHMS()
  //   })
  //   return arr;
  // }

  //travels는 그냥 리턴하고, createdAt 필드만 재구성하는 방식
  travels: function() {
    // return DB_TRAVEL.findAll(); //조건없이 전체 검색
    // return DB_TRAVEL.findAll({지역: '서울', 태그: '봄', 조회수: 0});

    // return DB_TRAVEL.findAll({},{}); //조관과 옵션 검색
    // return DB_TRAVEL.findAll({},{sort: {조회수: true}}); //조회수 정방향 정렬
    // return DB_TRAVEL.findAll({지역: '서울', 태그: '봄'},{sort: {조회수: true}}); //조건별 조회수 정방향 정렬
    return DB_TRAVEL.findAll({}, {limit: 30});
  },
  createdAt: function() {
    return this.createdAt.toStringYMDHMS();
  }

});

Template.main.events({
  // 화면의 이벤트를 처리
  'click #btn-count': function() {
    Session.set('count', Session.get('count')+1);
  }
});