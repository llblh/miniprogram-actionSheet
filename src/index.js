Component({
  properties: {
    status: {
      type: Boolean,
      value: false,
    },
    actionList: {
      type: Array,
      value: [],
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onClose() {
      this.triggerEvent('close')
    },
    actionLaunch(e) {
      const {item} = e.target.dataset
      this.triggerEvent('action', item)
    }
  }
})
