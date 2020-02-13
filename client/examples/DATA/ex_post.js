FlowRouter.template('/ex_post/:_id', 'ex_post');

Template.ex_post.onCreated(function() {
  var _id = FlowRouter.getParam('_id')
  DB_POSTS.update({_id: _id}, {
    $inc: {readCount: 1}  //조회수 1 증가 업데이트
  });
});

Template.ex_post.helpers({
  comments: function() {
    return DB_COMMENTS.find({post_id: FlowRouter.getParam('_id')});
  },
  writer: function() {
    //this에는 DB_COMMENTS {} 하나하나가 들어 있음.
    return Meteor.users.findOne({_id: this.writer}).username;
  },
  board: function() {
    var _id = FlowRouter.getParam('_id')
    return DB_POSTS.findOne({_id: _id});
  },
  createdAt: function() {
    return this.createdAt.toStringYMDHMS();
  }
});

Template.ex_post.events({
  'click #btn-comment-save': function() {
    var comment = $('#inp-comment').val();

    DB_COMMENTS.insert({
      createdAt: new Date(),
      comment: comment,
      writer: Meteor.user()._id,
      post_id: FlowRouter.getParam('_id')
    })

  }
})