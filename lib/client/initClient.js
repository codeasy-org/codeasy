//{{> loginButtons}} 기능의 로그인 옵션 셋팅
Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY'
});

FlowRouter.template = function(name) {
  var arr_name = name.split('/');
  FlowRouter.route(name, {
    action: function() {
      BlazeLayout.render(arr_name[1]);
    }
  });
}

