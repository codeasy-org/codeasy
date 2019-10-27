FlowRouter.route('/', {
  action: function() {
    console.log(10000)
    BlazeLayout.render('main');
  }
});
console.log(11)