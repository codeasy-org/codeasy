FlowRouter.template('/intro', 'intro')


Template.intro.helpers
  content: -> DB_POSTS.findOne(_id: 'intro')?.content