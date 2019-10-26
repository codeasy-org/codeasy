Template.home.onRendered ->
#  console.log(Meteor.absoluteUrl())
  # To give an box effect into single screen page,
  # set the height 100% for current page only.
  $('html').css('height', '100%');
  $('body').css('height', '100%');
  $('#__blaze-root').css('height', '100%');
#  $('#layout').css('background-image', 'url(/images/home.jpg)')

Template.home.onDestroyed ->
  $('html').css('height', '');
  $('body').css('height', '');
  $('#__blaze-root').css('height', '');
#  $('#layout').css('background-image', '')