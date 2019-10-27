FlowRouter.template('/ex_login_navbar', 'ex_login_navbar');

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
      $set: { // 사용자 객체의 profile 프로퍼티는 사용자 기타 정보를 저장 하는 공통 된 위치 입니다.
        'username': name,
        'profile.address': address,
        'profile.mobile': mobile
      }
    });

    alert('사용자 프로파일을 수정 하였습니다.');
  }
});