FlowRouter.template('/', 'codeasy');

// FlowRouter.route('/codeasy',{
//   action: function() {
//     BlazeLayout.render('codeasy');
//   }
// });


Template.codeasy.onRendered(function() {
  $('html').css('height', '100%');
  $('body').css('height', '100%');
  $('#__blaze-root').css('height', '100%');
});

Template.codeasy.onDestroyed(function() {
  $('html').css('height', '');
  $('body').css('height', '');
  $('#__blaze-root').css('height', '');
});