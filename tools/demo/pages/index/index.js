Page({
  data: {
    info: [],
    asStatus: false,
    actionList: [
      {
        key: 'share',
        name: '分享好友',
      },
      {
        key: 'edit',
        name: '编辑',
      },
      {
        key: 'delete',
        name: '删除',
        color: 'red'
      }
    ],
  },
  actionSheetToggle() {
    this.setData({
      asStatus: !this.data.asStatus,
    })
  },
  actionSheetReceive(event) {
    const {key} = event.detail
    switch (key) {
      case 'share':
        console.log('点击分享')
        break
      case 'edit':
        console.log('点击编辑')
        break
      case 'delete':
        console.log('点击删除')
        break
      default:
        break
    }
    this.actionSheetToggle()
  }
})
