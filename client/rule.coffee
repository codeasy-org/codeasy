FlowRouter.template('/rule', 'rule')

Template.rule.helpers
  rule: -> DB_RULE.findOne(_id: '_id').content