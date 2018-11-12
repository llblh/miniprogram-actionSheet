# miniprogram-actionSheet

小程序自定义组件 - 操作菜单

![miniprogram-actionSheet](http://stor.llblh.com/miniprogram-actionsheet.png)

## 使用方法

1. 安装 miniprogram-actionsheet
```
npm install --save @carpenter/miniprogram-actionsheet
```

2. 在需要使用 miniprogram-actionsheet 的页面 page.json 中添加 miniprogram-actionsheet 自定义组件配置
``` json
{
  "usingComponents": {
    "actionsheet": "@carpenter/miniprogram-actionsheet",
  }
}
```
3. WXML 文件中引用 miniprogram-actionsheet

``` xml
  <!-- <button bindtap="actionSheetToggle">click me</button> -->
  <actionsheet
    status="{{ asStatus }}"
    actionList="{{ actionList }}"
    bindclose="actionSheetToggle"
    bindaction="actionSheetReceive"
  />
```
#### miniprogram-actionsheet 参数

| 属性名        | 类型          | 默认值        | 是否必须      | 说明                     |
|--------------|--------------|--------------|--------------|-------------------------|
| status       | Boolean      | false        | 是 | 是否显示 |
| actionList   | Array        | []           | 是           | 菜单内容                  |
| close        | Function     |              | 是           | triggerEvent             |
| action       | Function     |              | 是           | triggerEvent             |


#### actionList

| 属性名        | 类型          | 默认值        | 是否必须      |
|--------------|--------------|--------------|--------------|
| key          |              |              | 否           |
| name         | String       |              | 是           |
| color        | String       |              | 否           |
> key = 'share' 展示button open-type="share"组件，分享截图会有半透明遮罩层，暂无解决办法，建议使用自定义分享图片，
``` js
Page({
  data: {
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
```