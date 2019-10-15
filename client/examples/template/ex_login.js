FlowRouter.route('/ex_login', {
  action: function() {
    BlazeLayout.render('ex_login');
  }
});

Template.ex_login.onRendered(function() {
  $('html').css('height', '100%');
  $('body').css('height', '100%');
  $('#__blaze-root').css('height', '100%');
  console.log(111)
});

Template.ex_login.onDestroyed(function() {
  $('html').css('height', '');
  $('body').css('height', '');
  $('#__blaze-root').css('height', '');
});
