console.log(Meteor.absoluteUrl() )


Template.main.events
  'change #test': (evt, tmpl) ->
    file = $('#test').prop('files')[0]
    rslt = DB_FILES.insert
      file: file
    console.log(rslt.config.file.name)
    console.log(rslt.config.fileId)
#    debugger