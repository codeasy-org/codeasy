FlowRouter.route('/ex_layout',{
  action: function() {
    BlazeLayout.render('ex_layout', {name: 'ex_layout_subpage'});
  }
});