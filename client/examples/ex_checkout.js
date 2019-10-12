FlowRouter.route('/ex_checkout', {
  action: function() {
    BlazeLayout.render('ex_checkout');
  }
})

Template.ex_checkout.helpers({
  resumes: function() {
    return DB_RESUME.find({}, {sort: {createdAt: -1}, limit: 5})
  }
})

Template.ex_checkout.events({
  'click #btn-submit': function(evt) {
    evt.preventDefault();
    var firstName = $('#firstName').val();
    // $('#firstName').val('merong');
    // alert($('#state').val());
    // alert($('#credit').is(":checked"))
    var credit = $('#credit').is(":checked")
    // alert($('#debit').is(":checked"))
    // alert($('#paypal').is(":checked"))
  //  1. DB에 바로 넣기
  //   var data = {
  //     createdAt: new Date(),
  //     firstName: firstName,
  //     credit: credit
  //   };
  //   DB_RESUME.insert(data);
  //   alert('success');
  //  2. 서버에 전달해서 작업하기
    Meteor.call('saveResume', firstName, credit, function() {
      alert(1111111); //서버 수행 이후 클라이언트에서 실행 될 코드.
    });


  }

})

