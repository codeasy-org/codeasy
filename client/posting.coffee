FlowRouter.template('/posting', 'posting')

Template.posting.onRendered ->
  $('#editor').summernote
    popover: {},
    minHeight: 200