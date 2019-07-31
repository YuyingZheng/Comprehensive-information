<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <!-- input占位符 -->
    <slot></slot>
    <!-- 错误信息展示 -->
    <p v-if="error" style="color: red">{{ error }}</p>
  </div>
</template>

<script>
import Schema from 'async-validator'
export default {
  name: 'k-form-item',

  inject: ['form'],

  data () {
    return {
      error: ''
    }
  },

  props: {
    label: {
      type: String,
      default: ''
    },
    prop: {
      type: String
    }
  },

  methods: {
    validate () {
      // 执行具体检验工作
      // 1.获取校验规则
      const rules = (this.form.rules[this.prop])

      // 2.获取数据模型
      const value = (this.form.model[this.prop])

      // 3.校验对象
      const descriptor = {[this.prop]: rules}

      // 4.创建校验器
      const schema = new Schema(descriptor)

      // 5.校验
      schema.validate({[this.prop]:value}, errors=> {
        if(errors) {
          this.error = errors[0].message
        } else {
          this.error = ''
        }
      })
    }
  },

  mounted () {
    this.$on('validate', this.validate)
  }
}
</script>
