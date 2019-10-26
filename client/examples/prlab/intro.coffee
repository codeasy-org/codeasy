FlowRouter.route '/intro',
  action: ->
    BlazeLayout.render('layout', {name: 'intro'})