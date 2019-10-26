FlowRouter.route('/members',{
  action: function() {
    BlazeLayout.render('layout', {name: 'members'});
  }
})

Template.members.helpers({
  db_lees: function() {
    return DB_LEE.find({}, {sort: {period: 1}});
  },
  user: function() {
    return Meteor.user();
  },
  members: function() {
    return DB_MEMBERS.find();
  },
  link: function() {
    return DB_FILES.findOne({_id: this.file_id}).link();
  },
  professorImgage: function() {
    return '/images/prlab/lee.jpg'
    // return Meteor.users.findOne({username: 'admin'})['profile.']
  }
});

Template.members.events({
  'change #inp-profile-img-professor': function() {
    var fileInfo = DB_FILES.insert({   //파일 DB에 미리 저장
      file: file
    });
    Meteor.users.update({username: 'admin'}, {
      $set: {
        'profile.img_id': fileInfo.config.fileId
      }
    })
  },
  'click #btn-remove': function() {
    if (confirm('정말 지우시겠습니까?')) {
      DB_MEMBERS.remove({_id: this._id});
    }
  },
  'click #lnk-profile-img': function() {
    $('#inp-hidden').click()
  }
});