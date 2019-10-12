FlowRouter.route('/ex_layout',{
  action: function() {
    BlazeLayout.render('ex_layout', {name: 'ex_layout_subpage'});
  }
})
FlowRouter.route('/ex_layout_subpage2',{
  action: function() {
    BlazeLayout.render('ex_layout', {name: 'ex_layout_subpage2'});
  }
})