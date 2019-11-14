FlowRouter.template('/ex_cover', 'ex_cover');

Template.ex_cover.onRendered(function() {
  $('html').css('height', '100%');
  $('body').css('height', '100%');
  $('#__blaze-root').css('height', '100%');
});

Template.ex_cover.onDestroyed(function() {
  $('html').css('height', '');
  $('body').css('height', '');
  $('#__blaze-root').css('height', '');
});
