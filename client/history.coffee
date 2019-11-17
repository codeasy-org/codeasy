FlowRouter.template('/history', 'history')

Template.history.helpers
  content: -> POSTS.findOne(_id: 'history')?.content
