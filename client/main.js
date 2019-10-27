FlowRouter.route('/', {
  action: function() {
    console.log(10000)
    BlazeLayout.render('main');
  }
});

Template.main.onRendered(function() {
  Meteor.call('mirror', {a: 11, b:22}, function(err, rslt) {
    //화면에 받은 데이터를 a,b 를 표시 해 주고 싶은거.
    Session.set('내데이터', rslt);
  });
});

Template.main.helpers({
  data: function() {
    return Session.get('내데이터').a;
  }
})
