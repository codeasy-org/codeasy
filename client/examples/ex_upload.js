FlowRouter.route('/ex_upload', {
  action: function() {
    BlazeLayout.render('ex_upload');
  }
})

Template.ex_upload.helpers({
  isAdmin: function() {
    var user = Meteor.user();
    if(user.profile.isAdmin === true) return true
    else return false;
  },
  isLogin: function() {
    var user = Meteor.user();
    // if user has address?
    //   return true;
    // else return false;
    if (user.hasOwnProperty('profile')) {
      return true;
    }
    else return false;

  },
  contents: function() {
    //CONTENTS 데이터베이스를 화면에 전달
    return DB_CONTENTS.find();
  },
  createdAt: function() {
    //화면에 보이는 날짜 데이터를 정해진 포맷으로 변환하여 전달
    return Codeasy.utils.getStringYMDFromDate(this.createdAt);
  },
  link: function() {
    // 컨테츠 데이터베이스에 저장 되어 있는 파일(이미지)의 _id를 이용하여 실제 링크로 변환하여 전달
    return Codeasy.utils.getFileLink(this.file._id)
  }
})

Template.ex_upload.events({
  'click #btn-address': function() {
    var address = $('#ta-article').val();
    // var user = Meteor.user();
    Meteor.users.update({_id: Meteor.user()._id}, {
      $set:
        {
          'profile.address': address,
          'profile.name': 'name'

        }
    });
  },
  'click #resume-detail': function() {

  },
  'click #btn-save': function(evt, inst) {
    //파일과 켄텐츠 저장
    var file = $('#inp-file').prop('files')[0];   //화면에서 선택 된 파일 가져오기
    var db_file = DB_FILES.insert({   //파일 DB에 미리 저장
      file: file
    });

    DB_CONTENTS.insert({    //컨텐츠 DB에 저장
      createdAt: new Date(),          //저장 시각
      content: $('#ta-article').val(),//저장 컨텐츠
      file: {
        _id: db_file.config.fileId,     //위 저장 된 파일 _id
        name: db_file.config.file.name  //위 저장 저장 파일명
      }
    });

    Meteor.setTimeout(function() {  // DB에 이미지 삽입 후 link에 바로 접근 시 이미지가 브라우저에 나타나지 않음
      location.reload();            // 따라서 삽입 후 해당 link 접근에 가능한 시간 경과 후 화면을 갱신 해주는 과정
    }, 1000);
  },
  'click #btn-remove': function() {
    DB_CONTENTS.remove({_id: this._id});  //선택 컨텐츠를 DB에서 삭제
  },
  'change #inp-file': function(evt, inst) {
    //inp-file에서 파일을 선택 시 파일명을 input 라벨에 표시
    var file = $('#inp-file').prop('files')[0];
    $('#lb-file').text(file.name);
  }
})