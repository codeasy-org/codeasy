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
  professorImage: function() {
    // return '/images/prlab/lee.jpg'
    var img_id = Meteor.users.findOne({username: 'admin'})['profile']['img_id'];
    return DB_FILES.findOne({_id: img_id}).link();
  }
});

Template.members.events({
  'change #inp-profile-img-professor': function() {
    var file = $('#inp-profile-img-professor').prop('files')[0];
    var admin = Meteor.users.findOne({username: 'admin'});
    Meteor.users.update({_id: admin._id}, {
      $set: {
        'profile.img_id': DB_FILES.insertFile(file)
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