Template.registerHelper 'isAdmin', ->
  return Meteor.user()?.profile?.type is 'admin'