FlowRouter.route '/member_profile',
  action: ->
    BlazeLayout.render('layout', {name: 'member_profile'})

Template.member_profile.events
  'click #btn-save': (evt) ->
    evt.preventDefault()
    file = $('#inp-img').prop('files')[0]
    firstName = $('#inp-firstName').val()
    lastName = $('#inp-lastName').val()
    sex = $('#sel-sex').val()
    status = $('#sel-status').val()
    email = $('#inp-email').val()
    address = $('#inp-address').val()
    field = $('#inp-field').val()

    unless file then return alert 'Profile image is required.'
    file_id = DB_FILES.insertFile(file);
    if file
      DB_MEMBERS.insert
        file_id: file_id
        name:
          firstName: firstName
          lastName: lastName
        sex: sex
        status: status
        email: email
        address: address
        field: field
      $('#form-member-profile').trigger('reset')
      $('#img_profile').attr('src', '/images/prlab/camera.png')
      $('#inp-img').val('')
      alert('저장 되었습니다.')
      FlowRouter.go('/members')
  'change #inp-img': ->
    file = $('#inp-img').prop('files')[0]
    if file
      reader = new FileReader()
      reader.onload = (e) ->
        $('#img_profile').attr('src', e.target.result)
      reader.readAsDataURL(file)

