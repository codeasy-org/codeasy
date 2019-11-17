FlowRouter.template('/rule', 'rule')

Template.rule.helpers
  content: -> POSTS.findOne(_id: 'rule')?.content