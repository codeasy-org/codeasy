FlowRouter.template('/notice', 'notice')

Template.notice.helpers
  boards: ->
    return POSTS.findAll({}, {sort: {createdAt: -1}})
  YMD: ->
    return this.createdAt.toStringYMD()
  HMS: ->
    return this.createdAt.toStringHMS()

Template.notice.events
  'click #btn-remove': ->
    if confirm('삭제 하시겠습니까?')
      POSTS.remove({_id: this._id})
      alert('삭제 되었습니다.')