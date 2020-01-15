FlowRouter.template('/ex_album', 'ex_album');

Template.ex_album.onRendered(function() {

});

Template.ex_album.helpers({
  articles: function() {
    return Article.findAll()
  }
});

Template.ex_album.events({
  // 화면의 이벤트를 처리
  'click #btn-save': function() {
    //1.input 박스에 입력 된 글자를 가져온다.
    var article = $('#inp-article').val()
    //2.db에 insert 한다.
    Article.insert({
      date: new Date(),
      content: article,
    });
    $('#inp-article').val('')

  }
});






















