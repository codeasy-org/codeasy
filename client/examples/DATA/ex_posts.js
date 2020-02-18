FlowRouter.template('/ex_posts', 'ex_posts');

Template.ex_posts.onRendered(function() {

});

var count = 0;

Template.ex_posts.helpers({
  boards: function() {
    return DB_POSTS.findAll({}, {sort: {createdAt: -1}});
  },
  YMD: function() {
    return this.createdAt.toStringYMD();
  },
  HMS: function() {
    return this.createdAt.toStringHMS();
  },
  count: function() {
    return count++;
  },
});

Template.ex_posts.events({
  'click #btn-like': function(evt, tmpl) {
    // alert($(evt.target).attr('count'));
    // var arr = DB_POSTS.findAll({}, {sort: {createdAt: -1}});
    // console.log(arr[$(evt.target).attr('count')])
    // console.log(this)
    // alert($('#btn-remove').attr('class'))
    this.like++
    DB_POSTS.update({_id: this._id}, this);

  },
  'click #btn-remove': function() {
    if(confirm('삭제 하시겠습니까?')) {
      DB_POSTS.remove({_id: this._id});
      alert('삭제 되었습니다.');
    }
  }
});