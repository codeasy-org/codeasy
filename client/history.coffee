FlowRouter.template('/history', 'history')

Template.history.helpers
  content: -> DB_POSTS.findOne(_id: 'history')?.content