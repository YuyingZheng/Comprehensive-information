<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <k-form :model="model" :rules="rules" ref="kkbLoginForm">
      <k-form-item label="username" prop="username">
        <k-input v-model="model.username"></k-input>
      </k-form-item>
      <k-form-item label="password" prop="password">
        <k-input type="password" v-model="model.password"></k-input>
      </k-form-item>
    </k-form>
  </div>
</template>

<script>
import KInput from './KInput'
import KFormItem from './KFormItem'
import KForm from './KForm'
export default {
  name: 'HelloWorld',
  components: {
    KInput,
    KFormItem,
    KForm
  },
  data () {
    return {
      model: {
        username: '',
        password: ''
      },
      rules: {
         username: [{required: true, message: '请输入用户名'}],
         password: [{required: true, message: "请输入密码"}]
      }
    }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
