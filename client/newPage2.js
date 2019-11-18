FlowRouter.template('/newPage2/:_id', 'newPage2');

Template.newPage2.helpers({
  keywords: function() {
    var major_id = FlowRouter.getParam('_id');
    var major = DB_MAJOR.findOne({_id: major_id});
    return major.keywords;
  }
})


Template.newPage2.events({
  'click #btn-save': function() {
    var keyword = $('#inp-keyword').val();
    var major_id = FlowRouter.getParam('_id');
    var major = DB_MAJOR.findOne({_id: major_id});
    if (major.keywords == null) {
      major.keywords = [];
    }
    major.keywords.push(keyword);
    DB_MAJOR.update({_id: major_id}, major);
  }
})