FlowRouter.template('/ex_message', 'ex_message');

Template.ex_message.onRendered(function() {
  $(function(){
    $("#addClass").click(function () {
      $('#qnimate').addClass('popup-box-on');
    });

    $("#removeClass").click(function () {
      $('#qnimate').removeClass('popup-box-on');
    });
  })
});