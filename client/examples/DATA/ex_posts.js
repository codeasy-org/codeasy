FlowRouter.template('/ex_posts');

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
    var article = $('#ta-article').val()
    // console.log(type, name, title, article);

    if(!title) {
      return alert('제목은 반드시 입력 해 주세요.');
    }

    var data = {
      createdAt: new Date(),
      type: type,
      name: name,
      title: title,
      content: article,
      readCount: 0
    };
    var b_data = {
      a: 10,
      b: 20
    };
    Meteor.call('savePost', data, b_data, function(err, rslt) {
      //서버에서 처리 할거 다하고 응답을 주면 그 리턴을 받아서 클라이언트가 실행하는 부분
      if(err) {
        alert(err);
      } else {
        alert(rslt); //결과를 가지고 클라이언트에서 수행해야 하는 것이 있으면 여기서 하면 됨.
      }
    });
    // DB_POSTS.insert({
    //   createdAt: new Date(),
    //   type: type,
    //   name: name,
    //   title: title,
    //   content: article,
    //   readCount: 0
    // });

    // alert('저장하였습니다.');
    // $('#inp-type').val('');
    // $('#inp-name').val('');
    // $('#inp-title').val('');
    // $('#ta-article').val('');
  },
  'click #btn-remove': function() {
    if(confirm('삭제 하시겠습니까?')) {
      DB_POSTS.remove({_id: this._id});
      alert('삭제 되었습니다.');
    }
  }
});