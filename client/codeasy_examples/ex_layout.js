FlowRouter.route('/codeasy_dynamic_layout',{
  action: function() {
    BlazeLayout.render('codeasy_dynamic_layout', {name: 'codeasy_dynamic_layout_subpage'});
  }
})