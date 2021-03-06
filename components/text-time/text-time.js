// components/my-form/my-input.js
Component({
  /**
   * 组件的初始数据
   */
  options: {
    addGlobalClass: true,
  },
  properties: {
    label: {
      type: String,
      value: '',
    },
    formid: {
      type: String,
      value: '',
    },
    forminfo: {
      type: Object,
      value: {}
    }
  },
  data: {
    input_text: '',
  },
  behaviors: ['wx://component-export'],
  //组件最终对外导出的数据
  export() {
    return {
      input_text: this.data.input_text,
      force: this.properties.forminfo.force,
      role: this.properties.forminfo.role }
  },
  /**
   * 组件的方法列表
   */
  ready: function () {
    console.log(this.properties.forminfo);
  },
  methods: {
    bindPickerChange: function (e) {
      this.setData({
        input_text: e.detail.value
      });
    }
  }
})
