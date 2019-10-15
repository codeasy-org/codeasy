FlowRouter.route('/ex_login_custom', {
  action: function() {
    BlazeLayout.render('ex_login_custom');
  }
});

Template.ex_login_custom.onRendered(function() {
  // 화면 로드 시 스크린 사이즈 전체를 활용하기 위한 설정
  $('html').css('height', '100%');
  $('body').css('height', '100%');
  $('#__blaze-root').css('height', '100%');
});

Template.ex_login_custom.onDestroyed(function() {
  // 화면 이동 시 스크린 사이즈 전체를 활용을 해제 하기 위한 설정
  $('html').css('height', '');
  $('body').css('height', '');
  $('#__blaze-root').css('height', '');
});

Template.ex_login_custom.helpers({
  email: function() {
    return Meteor.user().emails[0].address;
  }
});

Template.ex_login_custom.events({
  'click #btn-login': function() {
    var email = $('#inputEmail').val();
    var password = $('#inputPassword').val();
    Meteor.loginWithPassword(email, password);
  },
  'click #btn-logout': function() {
    Meteor.logout();
  }
});
