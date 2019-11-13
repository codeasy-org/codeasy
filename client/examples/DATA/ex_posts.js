FlowRouter.template('/ex_posts', 'ex_posts');

Template.ex_posts.onRendered(function() {
  $('#editor').summernote({
    popover: {},
    minHeight: 200
  });
});

Template.ex_posts.helpers({
  boards: function() {
    return DB_POSTS.findAll({}, {sort: {createdAt: -1}});
  },
  YMD: function() {
    return this.createdAt.toStringYMD();
  },
  HMS: function() {
    return this.createdAt.toStringHMS();
  }
});

Template.ex_posts.events({
  'click #btn-save': function() {
    var type = $('#inp-type').val();
    var name = $('#inp-name').val();
    var title = $('#inp-title').val();
    var html = $('#editor').summernote('code');

    if(!title) {
      return alert('제목은 반드시 입력 해 주세요.');
    }

    DB_POSTS.insert({
      createdAt: new Date(),
      type: type,
      name: name,
      title: title,
      content: html,
      readCount: 0
    });

    alert('저장하였습니다.');
    $('#inp-type').val('');
    $('#inp-name').val('');
    $('#inp-title').val('');
    $('#editor').summernote('reset');
  },
  'click #btn-remove': function() {
    if(confirm('삭제 하시겠습니까?')) {
      DB_POSTS.remove({_id: this._id});
      alert('삭제 되었습니다.');
    }
  }
});