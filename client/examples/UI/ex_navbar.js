FlowRouter.template('/ex_navbar', 'ex_navbar');


Template.ex_navbar.onRendered(function() {
  switch (FlowRouter.current().path) {
    case '/ex_album':
      $('#ex_album').attr('style', 'color:red')
      return
    case '/ex_carousel':
      $('#ex_carousel').attr('style', 'color:red')
      return
    default:

  }
})

Template.ex_navbar.helpers({
  // ex_album: function() {
  //   if (FlowRouter.current().path === '/ex_album')
  //     return 'color: red;'
  // },
  // ex_carousel: function() {
  //   if (FlowRouter.current().path === '/ex_carousel')
  //     return 'color: red;'
  // }
})