FlowRouter.route('/ex_login_navbar', {
  action: function() {
    BlazeLayout.render('ex_login_navbar');
  }
});

Template.ex_login_navbar.helpers({
  userInfo: function() {
    return Meteor.user();
  }
});

Template.ex_login_navbar.events({
  'click #btn-update-profile': function() {
    var userInfo = Meteor.user();
    var name = $('#inp-name').val();
    var address = $('#inp-address').val();
    var mobile = $('#inp-mobile').val();

    Meteor.users.update({_id: userInfo._id}, {
      $set: {
        'profile.name': name,
        'profile.address': address,
        'profile.mobile': mobile
      }
    });

    alert('사용자 프로파일을 수정 하였습니다.');
  }
});