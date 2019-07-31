1.只有当实例被创建时data中存在的属性才是响应式的
即： 如果你添加了一个新的属性 比如：vm.b = 'hi' 
那么对b的改动将不会触发任何视图的更新。

Object.freeze()会阻止修改现有的属性->响应系统无法再追踪变化

2.Vue实例暴露了一些有用的实例属性和方法，他们都有前缀$$eel
vm.$data
vm.$el
vm.$watch

3.生命周期钩子的this上下文指向调用它的Vue实例
所以不要再选项属性或调调上使用箭头函数
例如：created: () => console.log(this.a)
或 vm.$watch('a', newValue => this.myMethod()).
因为箭头函数是和父级上下文绑定在一起的。

4. v-once 一次行插值 当数据改变时， 插值处的内容不会更新，
这会影响该节点上的其他数据绑定

5. 对于所有数据绑定，Vue.js都提供了完全的js表达式支持
但是只能是单个表达式，例如流控制也不会生效，要用三元表达式

6.v-bind:href = 'url' ->在这里href是参数，将该元素的href特性与表达式url的值绑定 缩写:href
  v-on:click 这里参数是监听的事件名 @click

7.在vue中，在绑定数据中不应该有太多复杂逻辑计算。可以把复杂逻辑计算放在计算表达式中

8.computed、watch和method的区别
computed 计算属性是基于他们的依赖进行缓存的，只有相关依赖发生改变他们才会重新求值 。
对于开销大的计算，你希望做缓存，不希望多次执行它，就可以采用computed

method 每次触发重新渲染时，调用方法总会再执行函数，如果你不希望有缓存，可以用Method

watch观察和响应Vue实例上的数据变动，必须是在data中定义了，但computed不能与data重复定义
watch还能有新旧值得监测。适合在数据变化时执行异步h或开销较大的操作。

9.computed默认只有getter函数，你可以显示得给它提供一个setter函数

10.只要两个元素是完全独立的，不要复用它们。只需添加一个具有唯一值的Key属性即可

11.v-if vs v-show
v-if 是真正的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建
v-if 条件为真才开始渲染

v-show 始终被渲染，只是简单地基于css进行切换

v-if更高地切换开销 非常频繁地切换用v-show
v-show更高地初始渲染开销 运行时条件很少改变用v-if

12. v-for 和 v-if一起使用时, v-for具有比v-if更高地优先级（但不推荐同时使用）

13.一个对象的v-for  v-for="(value,key,index) in object"
在遍历对象时，是按Object.keys()的结果遍历,但是不能保证它的结果在不同的JS引擎下是一致的。

14. key ？？？
当 Vue.js 用 v-for 正在更新已渲染过的元素列表时，它默认用“就地复用”策略。
如果数据项的顺序被改变，Vue 将不会移动 DOM 元素来匹配数据项的顺序， 
而是简单复用此处每个元素，并且确保它在特定索引下显示已被渲染过的每个元素。
这个类似 Vue 1.x 的 track-by="$index"。

这个默认的模式是高效的，但是只适用于不依赖子组件状态或临时 DOM 状态 (例如：表单输入值) 的列表渲染输出。

15.数组更新检测
15.1 变异方法
vue包含一组数组的变异方法，它们也会触发视图更新
push()
pop()
shift()
unshift()
splice()
sort()
reverse()

15.2替换数组 (不会改变原数组，但会返回一个新数组)
filter()
concat()
slice()

16. 由于Js的限制，Vue不能检测到以下变动的数组 
  16.1利用索引直接设置一个项时
  16.2修改数组的长度时 vm.items.length = newLength
  16.1问题的解决可以用:
  Vue.set(vm.items, indexOfItem, newValue)
  vm.$set(vm.items, indexOfItem, newValue)
  vm.items.splice(indexOfItem, 1, newValue)


17.在组件中使用v-for时，key是必须的


18.组件可以进行任意次数的复用
每个组件都维护各自独立的数据
因为每用一次组件，就会有一个它的新实例被创建

19.data必须是个函数，因此每个实例都可以维护一份被返回对象的独立的拷贝
data: function() {
  return {
    counter: 0;
  }
}

20. Vue.component 是全局注册
全局注册可以用在其被注册之后的任何（通过new vue）新创建的vue根实例，也包括其组件树中的所有子组件的模板中

21. 每个组件必须只有一个根元素

22. v-model 
  是：value = value
    @input = $emit（'input', $event.target.value）的结合


23. 动态组件is

24. v-model会忽略所有表单元素的value,checked,selected特性的初始值而总是将
vue实例的数据作为数据来源

25. 表单修饰符 
.lazy
v-model 在每次input事件触发时将输入框的值与数据进行同步
v-model.lazy 转换成使用change事件进行同步
v-model.number 自动将用户的输入值转为数值类型
v-model.trim 自动过滤用户的首尾空白字符


26. 组建名命名：
 1. kebab-case <my-component-name>
 2. PascalCase <MyComponentName> 用该方法定义一个组件时，在引用这个自定义元素时
 两种命名法都可以使用。但是在DOM中使用时只有kebab-case是有效的。


 27. 全局注册Vue.component('my-componnet-name', { ...选项... })

 28. 局部注册
 全局注册所有的组件意味着即使你已经不再使用一个组件了，它任然会被包含在你
 最终的构建结果中。这造成了用户下载的的JS的无畏的增加。

 你可以通过一个普通的JS对象来定义组件:
 var ComponentA = { /* */ }
 var ComponentB = { /* */ }
 var ComponentC = { /* */ }

然后在components选项中定义你想要使用的组件

new Vue({
  el: '#app',
  components: {
    'component-a': ComponentA,
    'component-b': ComponentB
  }
})

或者需要的组件里Import 组件名 from 组件路径


29. 基础组件的自动化全局注册
 
30.Prop的大小写(单向传递)
html中的特性名是大小写不敏感的，所以浏览器会把所有大小写字符解释为小写字符。
在DOM中，camelCase的prop名需要使用其等价的kebab-case命名

传入一个数字/布尔值/数组/对象： 是静态的仍然需要'vue-bind'来告诉vue，这是Js表达式而不是一个字符串

那些prop会在一个组件实例创建之前进行验证
所以实例的属性（data, computed）在default或validator函数中是不可用的

31.禁用特性继承
InheritAttrs: false 如果不希望组件的根元素继承特性，你可以设置该属性
尤其配合$attrs属性使用


32.事件名
v-on事件监听器在dom模板中会被自动转换为全小写
所以v-on:myEevent将会转换成v-on: myevent 导致myEvent不能被监听到
故：始终推荐是用Kebab-case的事件名

33.自定义组件的v-model
一个组件上的 v-model 默认会利用名为 value 的 prop 和名为 input 的事件
但是单选框或者复选框等类型的输入控件可能会将value特性用于不同特性。
model选项可以用来避免这样的冲突

34. $listeners 属性，它是一个对象，里面包含了作用在这个组件上的所有监听器。

35. prop是单向数据流, update:myProName的模式可以修改子组件？？？？
.sync是它的缩写

36.slot
slot可以用在具体的html标签上
<p slot="title">this is title</p>

slot可以设置默认内容
<button type="submit">
<slot>submit</slot>
</button>
如果父组件为这个插槽提供了内容，则默认的内容会被替换掉。

37.编译作用域
slot不能访问父级作用域的东西
父组件模板的所有东西都会在父级作用域内编译；子组件模板的所有东西都会在子级作用域内编译。

38.在一个多标签的界面中使用is特性切换不同的组件
<component v-bind:is="currentTabComponent"></component>

39. keep-alive
帮助那些标签的组件实例能够被在它们第一次被创建的
时候缓存下来

40. 访问根实例 $root
在每个new Vue实例的子组件中
其根实例可以通过$root属性访问
获取根组件的数据this.$root.foo
写入根组件的数据this.$root.foo = 2
访问根组件的计算属性this.$root.bar
...的方法 this.$root.baz()

41. 访问父级组件实例 $parent

42. 访问子组件实例或子元素
ref特性为这个子组件赋予一个ID引用
this.$refs.xxxx

$refs只会在组件渲染完成之后生效，
并且它们不是响应式的，要避免在模板或
计算属性中访问$refs

43.依赖注入
provide-> 允许我们指定我们想要提供给后代组件的数据或方法
inject-> 来接收指定的我们想要添加在这个实例上的属性
provide: function() {
  return: {
    getMap: this.getMap
  }
}
inject: ['getMap']

44.程序化的事件侦听器
$on(eventName,eventHandler) 侦听一个事件
$once(eventName,eventHandler) 一次性侦听一个事件
$off(eventName,eventHandler)停止侦听一个事件

45.v-once创建低开销的静态组件
确保这些内容只计算一次然后缓存起来
不要过渡使用这个模式
当你需要渲染大量静态内容时，极少数的情况下它会给你带来便利，
除非你非常留意渲染变慢了，
不然它完全是没有必要的——再加上它在后期会带来很多困惑。

46.VUE在擦汗如，更新或者移除dom时，提供不同方式的应用过渡效果
  在css过渡和动画中自动应用class
  可以配合使用第三方css动画库，如aminate.css
  配合第三方js动画库，例如velocity.js
  在过渡钩子函数中是使用js直接操作dom

47. 当插入或删除包含在transition组件中的元素时，Vue将会做一下处理：
  1.自动嗅探目标元素是否应用了css过渡或动画，若是，在恰当时机被调用
  2.如果过渡组件提供了js钩子函数，这些钩子函数将在恰当的时机被调用
  3.若没1，2，dom操作（插入或者删除）在下一帧中立即执行。（此浏览器的逐帧动画
  和vue的nextTick概念不同）


48.过渡的类名， css过渡, css动画

49.mixins是一种分发Vue组件中可复用功能的非常灵活的方式，
可以包含任意组件选项，当组件是使用混入对象时，所有混入对象的选项被混入该组件
本身的选项。

  49.1 选项合并，当组件和混入对象含有同名选项时，以合适方式混合
       数据对象会浅合并，和组件的数据冲突时以组件数据优先。

       同名钩子函数将混合为一个数组，所以都会被调用，先执行mixins中的
       再执行组件自身的钩子。

       值为对象的选型，例如methods,components.directives,将混合成同一个对象
       若对象键名冲突时，取组件对象的键值对

  49.2 全局混入（慎用）
       一旦使用全局混入对象，将会影响到所有之后创建的vue实例

50。自定义指令
    有些情况下，你任然需要对普通dom元素进行底层操作，这时候就可以用自定义指令
      
     全局自定义指令：
     Vue.directive()
     局部指令，在组件中也接受一个directives选项
     directives: {

     }

     50.1 钩子函数
     bind, 只调用一次，指令第一次绑定到元素时调用
     inserted,被绑定元素插入父节点时调用(仅保证父节点父节点存在，但不一定已被插入文档中)
     update, 所在组件的Vnode更新时调用，但可能发生在其子vnode更新之前，指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新
     componentUpdated 指令所在组件的 VNode 及其子 VNode 全部更新后调用。
     unbind：只调用一次，指令与元素解绑时调用。

     50.2 钩子函数的参数
     指令钩子函数会被传入以下参数：
     el: 指令所绑定的元素，可以用来直接操作DOM
     binding: 一个对象，包含以下属性：
       name: 指令名，不包括v-前缀
       value: 指令的绑定值。
       oldValue: 指令绑定的前一个值，仅在update和componentUpdated钩子中可用。无论值是否改变都可以用。
       expression: 字符串形式的指令表达式
       arg: 传给指令的参数 v-my-directive:foo---> foo
       modifiers: 一个包含修饰符的对象。v-my-directives.foo.bar中
       修饰符对象为 {foo: true, bar: true}
    vnode: Vue编译生成的虚拟节点。
    oldVnode: 上一个虚拟节点，仅在update和componentUpdated钩子中可用

    除了el之外，其他参数都是只读的，切勿进行修改
    指令可以传入一个JS对象字面量

51.渲染函数和JSX

52.https://segmentfault.com/a/1190000011381906?utm_source=tag-newest 生命周期