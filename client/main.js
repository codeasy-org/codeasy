// BlazeLayout.setRoot('body');
FlowRouter.route('/',{
  action: function() {
    BlazeLayout.render('main');
  }
})

Template.main.onRendered(function() {
  $('html').css('height', '100%');
  $('body').css('height', '100%');
  $('#__blaze-root').css('height', '100%');
});

Template.main.onDestroyed(function() {
  $('html').css('height', '');
  $('body').css('height', '');
  $('#__blaze-root').css('height', '');
})

Template.main.events({
  'click #lnk-ex-album': function() {
    // alert('clicked!');
  },
  'click #lnk-ex-album2': function() {
    alert('clicked!');
  },
  'click #click-test': function() {
    alert('test button clicked!');
  }
});