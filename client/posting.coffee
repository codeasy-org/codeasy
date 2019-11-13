FlowRouter.template('/posting', 'posting')

Template.posting.onRendered ->
  $('#editor').summernote
    popover: {},
    minHeight: 200

Template.posting.events
  'click #save': ->
    DB_RULE.upsert _id: '_id',
      createdAt: new Date()
      content: $('#editor').summernote('code')