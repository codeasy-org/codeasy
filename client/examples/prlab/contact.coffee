FlowRouter.route '/contact',
  action: ->
    BlazeLayout.render('layout', {name: 'contact'})


Template.contact.events
  'click #lnk-ask': (evt, inst) ->
    name = $('#inp-name').val()
    email = $('#inp-email').val()
    phone = $('#inp-phone').val()
    website = $('#inp-website').val()
    message = $('#ta-message').val()

    console.log !!email?.length or !!message?.length
    if !email?.length or !message?.length
      return alert 'Please fill the emails & message content.'

    form = "\n
- name: #{name}\n
- email: #{email}\n
- phone: #{phone}\n
- website: #{website}\n
- message \n#{message}
"
    Meteor.call 'sendEmail', 'AA <kakadais@gmail.com>', '',
    "[PRLAB] #{name}님의 홈페이지 문의 입니다.", form

    alert "You will get answer soon. Thanks!"

    $('#inp-name').val("")
    $('#inp-email').val("")
    $('#inp-phone').val("")
    $('#inp-website').val("")
    $('#ta-message').val("")