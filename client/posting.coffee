FlowRouter.template('/posting/:type/:_id', 'posting')

Template.posting.onRendered ->
  $('#editor').summernote
    popover: {}
    minHeight: 200
    maxHeight: $( window ).height() - 300

Template.posting.helpers
  content: ->
    type = FlowRouter.getParam('type')
    _id = FlowRouter.getParam('_id')
    switch type
      when 'page'
        Meteor.setTimeout -> $('#editor').summernote('reset')
        return DB_POSTS.findOne(_id: _id)?.content


Template.posting.events
  'click #save': ->
    type = FlowRouter.getParam('type')
    _id = FlowRouter.getParam('_id')
    switch type
      when 'page'
        DB_POSTS.upsert _id: _id,
          createdAt: new Date()
          type: _id
          content: $('#editor').summernote('code')
        history.back()