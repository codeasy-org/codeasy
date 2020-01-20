FlowRouter.template('/home_post/:_id', 'home_post');

Template.home_post.onCreated(function() {
  var _id = FlowRouter.getParam('_id')
  DB_POSTS.update({_id: _id}, {
    $inc: {readCount: 1}  //조회수 1 증가 업데이트
  });
});

Template.home_post.helpers({
  board: function() {
    var _id = FlowRouter.getParam('_id')
    return DB_POSTS.findOne({_id: _id});
  },
  createdAt: function() {
    return this.createdAt.toStringYMDHMS();
  }
});