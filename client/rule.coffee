FlowRouter.template('/rule', 'rule')

Template.rule.helpers
  content: -> DB_POSTS.findOne(_id: 'rule')?.content