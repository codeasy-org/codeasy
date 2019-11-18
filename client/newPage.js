FlowRouter.template('/newPage', 'newPage');


Template.newPage.helpers({
  datas: function() {
    // 우리는 여기서 사용자가 저장한 DB를 꺼내서
    // array로 전달 하고 싶다.
    return DB_MAJOR.findAll()
  },
})

Template.newPage.events({
  'click #btn-save': function() {
    var name = $('#inp-major').val();  //요게 화면 데이터
    DB_MAJOR.insert({
      'name': name,
      keywords: []
    });


  }
})