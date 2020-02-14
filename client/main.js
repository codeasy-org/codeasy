FlowRouter.template('/', 'main');

Template.main.onRendered(function() {
  // 화면이 그려지고 난 후 제일 먼저 수행
  Session.set('count', 0);
  Session.set('tags', '')
});

Template.main.helpers({
  // 화면에 데이터를 전달
  tags: function() {
    return DB_TAGS.findAll({name: Session.get('tags')});
  },
  count: function() {
    var count = Session.get('count');
    if (!count) {
      return 'Click!';
    } else {
      return 'Count: ' + count;
    }
  }
});

Template.main.events({
  // 화면의 이벤트를 처리
  'keyup #inp-tag': function(evt) {
    if(evt.which === 13) {
      Session.set('tags', $('#inp-tag').val())
    }
    // var tags = Session.get('tags');
    // tags.push($('#inp-tag').val());
    // Session.set('tags', tags);


    // DB_TAGS.insert({
    //   createdAt: new Date(),
    //   name: $('#inp-tag').val()
    // })
  },
  'click #btn-remove': function() {
    //Session.get('tags')
    //javascript array에서 특정 텍스트 값을 찾아서
    // 해당 항목을 지우는 방법
    // DB_TAGS.remove({_id: this._id});
  },
  'click #btn-count': function() {
    Session.set('count', Session.get('count')+1);
  }
});