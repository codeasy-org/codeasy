FlowRouter.template('/ex_album', 'ex_album');

Template.ex_album.helpers({
  activated: function() {
    alert(11)
    return 'color: red;';
  }
})