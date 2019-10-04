FlowRouter.route('/ex_upload', {
  action: function() {
    BlazeLayout.render('ex_upload');
  }
})

Template.ex_upload.helpers({
  contents: function() {
    return DB_CONTENTS.find();
  },
  createdAt: function() {
    return Codeasy.utils.getStringYMDFromDate(this.createdAt);
  }
})

Template.ex_upload.events({
  'click #btn-save': function(evt, inst) {
    var file = $('#inp-file').prop('files')[0];
    var db_file = DB_FILES.insert({
      file: file
    });
    DB_CONTENTS.insert({
      createdAt: new Date(),          //저장 시각
      content: $('#ta-article').val(),//저장 컨텐츠
      file: {
        _id: db_file.config.fileId,   //저장 파일 _id
        name: db_file.config.file.name//저장 파일명
      }
    });
  },
  'change #inp-file': function(evt, inst) {
    var file = $('#inp-file').prop('files')[0];
    $('#lb-file').text(file.name);
  }
})