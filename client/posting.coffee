FlowRouter.template('/posting/:type/:_id', 'posting')

Template.posting.onRendered ->
  $('#editor').summernote
    popover: {},
    minHeight: 200

Template.posting.helpers
  content: ->
    switch FlowRouter.getParam('type')
      when 'rule'
        return DB_RULE.findOne(_id: '_id')?.content


Template.posting.events
  'click #save': ->
    switch FlowRouter.getParam('type')
      when 'rule'
        DB_RULE.upsert _id: '_id',
          createdAt: new Date()
          content: $('#editor').summernote('code')
      when 'history'
        DB_HISTORY