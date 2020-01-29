FlowRouter.template('/ex_dashboard2', 'ex_dashboard2')

Template.ex_dashboard2.onRendered ->
  Meteor.setTimeout ->
    feather.replace()
  , 1000

Template.ex_dashboard2.helpers
  major: ->
    return DB_MAJOR.find()
  keyword_count: ->
    return DB_KEYWORD.find(major: @_id).count()

Template.ex_dashboard2.events
  'click #btn-register': (evt, inst) ->
    if confirm('등록 하시겠습니까?')
      DB_MAJOR.upsert _id: $('#inp-major').val(),
        _id: $('#inp-major').val()
      $('#inp-major').val('')

  'click #btn-remove': ->
    if(confirm('해당 전공명을 삭제 하시겠습니까?'))
      DB_MAJOR.remove _id: @_id
      Meteor.call 'remove_keywords', @_id, (err, rslt) ->


