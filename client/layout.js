FlowRouter.route('/',{
  action: function() {
    BlazeLayout.render('layout', {name: 'home'});
  }
})
