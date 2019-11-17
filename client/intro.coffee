FlowRouter.template('/intro', 'intro')


Template.intro.helpers
  content: -> POSTS.findOne(_id: 'intro')?.content