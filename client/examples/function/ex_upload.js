FlowRouter.route('/ex_upload', {
  action: function() {
    BlazeLayout.render('ex_upload');
  }
});

Template.ex_upload.helpers({
  contents: function() {
    //CONTENTS 데이터베이스를 화면에 전달
    return DB.find({db_name: 'ex_content'});
  },
  createdAt: function() {
    //화면에 보이는 날짜 데이터를 정해진 포맷으로 변환하여 전달
    return Utils.getStringYMDFromDate(this.createdAt);
  },
  link: function() {
    //파일 _id를 이용 해 파일 링크를 획득 및 리턴
    return DB_FILES.findOne({_id: this.file._id}).link();
  }
});

Template.ex_upload.events({
  'click #btn-save': function(evt, inst) {
    //파일 먼저 저장
    var file = $('#inp-file').prop('files')[0];   //화면에서 선택 된 파일 가져오기
    var fileInfo = DB_FILES.insert({   //파일 DB에 미리 저장
      file: file
    });

    //컨텐츠 저장 시 파일의 _id와 name을 함께 저장
    DB.insert({    //컨텐츠 DB에 저장
      db_name: 'ex_content',       //DB 명
      createdAt: new Date(),          //저장 시각
      content: $('#ta-article').val(),//저장 컨텐츠
      file: {
        _id: fileInfo.config.fileId,     //저장 된 파일의_id
        name: fileInfo.config.file.name  //저장 된 파일명
      }
    });
  },
  'click #btn-remove': function() {
    DB.remove({_id: this._id});  //선택 컨텐츠를 DB에서 삭제
  },
  'change #inp-file': function(evt, inst) {
    //inp-file에서 파일을 선택 시 파일명을 input 라벨에 표시
    var file = $('#inp-file').prop('files')[0];
    $('#lb-file').text(file.name);
  }
});