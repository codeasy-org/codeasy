FlowRouter.template('/ex_dashboard2_keyword/:_id', 'ex_dashboard2_keyword')

Template.ex_dashboard2_keyword.onRendered ->
  Meteor.setTimeout ->
    feather.replace()
  , 1000

Template.ex_dashboard2_keyword.helpers
  major: ->
    return DB_KEYWORD.find(major: FlowRouter.getParam('_id'))
  major_name: ->
    return FlowRouter.getParam('_id')

Template.ex_dashboard2_keyword.events
  'click #btn-register': (evt, inst) ->
    if confirm('키워드를 등록 하시겠습니까?')
      DB_KEYWORD.upsert _id: $('#inp-major').val(),
        _id: $('#inp-major').val()
        major: FlowRouter.getParam('_id')
      $('#inp-major').val('')
  'click #btn-remove': ->
    if(confirm('해당 전공명을 삭제 하시겠습니까?'))
      DB_KEYWORD.remove _id: @_id
