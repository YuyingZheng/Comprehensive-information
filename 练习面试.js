; (function () {
  /*
  * 基础数据类型
  * 复合数据类型
  */
})();

; (function () {
  /*
  * Object是js所有对象的父对象
  *数据封装类对象：
  *其他对象：
  */
})

  ; (function () {
    /*
    * 栈：原始数据类型
    * 堆：引用数据类型
  
    *两种类型的区别：存储位置不同
    *1.
    *2.
  })
  
  ;(function(){
    'use strict'
  })
  
  ;(function(){
    /*
    *null和underfined
    *转化为数值时：
    ***null->0
    ***underfined->NaN
    
    *在判断语句中,都解析成false
    *console.log(null == underfined) ture
    *console.log(null === underfined) false
  
    *typeof null => Object 表示“无”的对象
    *null表示“没有对象”，即此处不该有值：
    *   使用场景1：作为函数的参数，表示该函数的参数不是对象
    *   使用场景2：作为对象原型链的终点
    
  
    *typeof underfined = underfined 表示"无"的原始值
    *underfined表示"缺少值"，即此处应该有一个值，但是还没有定义
    *使用场景1：变量被声明了，但没有赋值时，==underfined
    *使用场景2：调用函数时，应该提供的参数没有提供，该参数==underfined
    *使用场景3：对象没有赋值的属性，该属性的值为underfined
    *使用场景4：函数没有返回值时, 默认返回underfined
    
    *undeclared是一个未声明也位赋值的变量，在严格模式下js访问会报错
  })
  
  ;(function(){
    //1.不要再同一行声明多个变量
    //2.如果你不知道数组的长度，请用Push
    //3.===/!==
    //4.对字符串使用单引号''
    //5.使用对象字面量替代new Array这种形式
    //6.绝对不要在一个非函数块里申明一个函数，把那个函数赋给一个变量，浏览器允许你这么做，但是他们的解析不同
    //7.不要使用全局函数
    //8.总是使用 var 来声明变量，如果不这么做将导致产生全局变量，我们要避免污染全局命名空间
    //9.switch语句必须带有default分支
    //10.使用/** 。。*/ //进行多行注释，包括描述，指定类型以及参数值和返回值
    //11.函数不应该有时候有返回值，有时候没有返回值
    //12.语句结束一定要加分号
    // 13.for 循环必须使用大括号
    // 14.if 语句必须使用大括号
    // 15.for-in 循环中的变量应该使用var关键字明确限定作用域，从而避免作用域污染
    // 16.避免单个字符名，让你的变量名有描述意义
    // 17.命名对象、函数和实例时使用驼峰命名规则
    // 18.给对象原型分配方法，而不是用一个新的对象覆盖原型，覆盖原型会使继承出现问题
    // 19.当给事件附加数据时，传入一个哈希而不是原始值，这可以让后面的贡献者加入更多数据到事件数据里，而不用找出并更新那个事件的事件处理器？？？？？？？
  })

  ; (function () {
    /*
    * call和apply的功能基本相同，都是实现继承或者转换对象指针的作用
    * 唯一不同的是前者参数是罗列出来的，后者是存到数组中的
    * call和apply功能就是实现继承的; 与面向对象的继承extends功能相似，但写法不同
    */
  })();


; (function () {
  var a = [1, 2, 3, 4];
  // push(): 将新元素添加到一个数组中，并返回该元素。
  var t = a.push(5); // [1, 2, 3, 4, 5]
  console.log(t)
  console.log(a)

  // pop(): 移除数组中的最后一个元素并返回该元素。
  var last = a.pop();
  console.log(last); // 5
  console.log(a); // [1, 2, 3, 4]

  // shift(): 移除数组中的第一个元素并返回该元素。
  var first = a.shift()
  console.log(first);//1

  // unshift(): 将指定的元素插入数组开始位置并返回该数组。
  a.unshift(6);
})();


; (function () {
  if (screen.width >= 1024 && screen.width < 1360) {
    setActiveStyleSheet(css1);
  }
})();


; (function () {
  /*
  * 在函数中： this 通常是一个隐含的参数
  * 在函数外（顶级作用中）：在浏览器中this值的是全局对象
  * 在node.js中指的是模块(Module)的导出(exports)
  * 
  * 传递到eval()中的字符串：
  * 如果eval()是被直接调用的，this指的是当前对象
  * 如果eval()是被间接调用的，this就是指全局对象
  * 
  */
})();

; (function () {
  /* 对象__proto__属性的值就是它所对应的原型对象：
  * 
  * __proto__(隐式原型)
  * JS中任意对象都有一个内置属性[[prototype]]
  * 浏览器都支持通过__proto__来访问
  * Object.getPrototypeOf()
  * Note: Object.prototype这个对象例外，它的__proto__的值是null
  * 构成原型链，同样用于实现基于原型的继承。当我们访问obj这个对象中的x属性时，如果在obj中找不到，那么就会沿着__proto__依次查找。
  * 
  * 
  * prototype(显式原型) 
  * 每个函数再创建后都会拥有一个名为prototype的属性，这个属性指向函数的原型对象
  * 通过Function.prototype.bind方法构造出来的函数是个例外，它没有prototype属性
  * 用来实现基于原型的继承与属性的共享
  * 
  * 二者的关系：
  * 隐式原型指向创建这个对象的函数(constructor)的prototype
  * 
  * instance.constructor.prototype = instance.__proto__
  * 
  * instanceof的操作符实现机制
  * instanceof的左值一般式一个对象，右值一般是一个构造函数，用来判断左值是右值得实例
  * 设 L instanceof R
  * 通过判断
  * L.__proto__.__proto__..... === R.prototype ?
  * 最终返回true or false
  * 也就是沿着L的__proto__一直寻找到原型链末端，直到等于R.prototype为止
  */
  function Func() {
    //
  }
  Func.prototype.name = 'Xiaosong';
  Func.prototype.getInfo = function () {
    return this.name;
  }

  var person = new Func();

  console.log(person.getInfo()); // 'Xiaosong'

  console.log(Func.prototype); //Func { name = "Xiaosong", getInfo = function ()}
})();


; (function () {
  /*
  * Js继承上
  * https://juejin.im/post/5ad8308d5188252e9e361fd4
  *1.构造继承 --- 缺点：函数也是引用类型，没办法共用函数 在子类（Student）里执行Person.call(this), 实例的引用类型不共享
  *2.原型继承 --- 缺点：共用引用类型 解决借用构造函数  Student.prototype = new Person() 实例的引用类型共享
  *3.组合继承 --- 取 1，2继承的长处，普通属性是用构造函数继承，函数是用原型链继承
  *
  * 
  * Js继承下
  * https://mp.weixin.qq.com/s/Hjzt0DUd6aXIH84vrf0poQ ？？？？？？？
  *
  *3.实例继承 --- 
  *4.拷贝继承
  */


})();

; (function () {
  // JS创建对象简单得说，无非就是使用内置对象或各种自定义对象，当然还可以使用Json,但写法也很多种，也能混合使用

  // 1.对象字面量的方式
  var person = {
    firstname: 'Mark',
    lastname: 'Yun',
    age: 25,
    eyecolor: 'black'
  };

  // 2.用function来模拟无参的构造函数
  function Person() {
    //
  }
  //定义一个function, 如果使用new“实例化”，该function可以看作是一个class
  var person = new Person();
  person.name = 'Xiaosong';
  person.age = 23;
  person.work = function () {
    alert('Hello' + person.name);
  };
  person.work();

  // 3. 用function来模拟有参的构造函数（用this关键字定义构造的上下文属性）
  function Person(name, age, hobby) {
    // 注： this作用域为当前对象
    this.name = name;
    this.age = age;
    this.work = work;
    this.info = function () {
      alert('我叫' + this.name + ', 今年' + this.age + '岁，是个' + this.work);
    };
  }
  // 实例化，创建对象
  var Xiaosong = new Person('Wookong', 23, '程序猿');
  // 调用info()方法
  Xiaosong.info();


  //4. 用工厂方式来创建(内置对象)
  var jsCreater = new Object();
  jsCreater.name = 'Brendan Eich';
  jsCreater.work = 'Js';
  jsCreater.info = function () {
    alert('我是' + this.work + '的发明者' + this.name);
  }
  jsCreater.info();

  //5. 用原型方式来创建
  function Standard() {
    //
  }
  Standard.prototype.name = 'ECMAScript';
  Standard.prototype.event = function () {
    alert(this.name + '是脚本语言标砖规范');
  }
  var jiaoben = new Standard();
  jiaoben.event();

  // 6. 用混合方式创建
  function iPhone(name, event) {
    this.name = name;
    this.event = event;
  }
  iPhone.prototype.sell = function () {
    alert('我是' + this.name + ', 我是iphone5S的' + this.event + '~hhaha!');
  }
  var SE = new iPhone('iPhone SE', '官方翻新机');
})

  ; (function () {
    /*
    * 1. 创建一个空对象，并且this变量引用该对象。同时还继承了该函数的原型
    * 2. 属性和方法被加入到this引用的对象中
    * 3. 新创建的对象由this所引用，并且最好隐式的返回this.
    */
    var obj = {};
    obj.__proto__ = Base.prototype;
    Base.call(obj)
  })();

; (function () {
  // hasOwnProperty

  /*
  * Js中 hasownProperty 函数方法是返回一个布尔值
  * 指出一个对象是否具有指定名称的属性
  * 此方法无法检查该对象的原型链中是否具有该属性
  * 该属性必须是对象本身的一个成员
  * 
  * 
  * object.hasOwnProperty(proName)
  * objcet和proName都是必选项
  * object-->一个对象的实例
  * proName--> 一个属性名称的字符串值
  * 
  */
})();

; (function () {
  /*
  * 它的功能是把对应的字符串解析成JS代码并运行
  * 避免使用，1.不安全 2.耗性能（2次， 一次解析成Js语句，一次执行）
  */
})();


; (function () {
  /*
  * ev.stopPropagation()
  * ev.cancelBubble = true; (旧IE)
  * https://www.cnblogs.com/jyybeam/p/5794932.html
  * https://segmentfault.com/a/1190000006934031
  * 
  * Js事件模型-->观察者模式(发布订阅者模式publish/subscribe), 它可以让多个
  * 观察者对象同时监听某一个主题对象，这个主题对象的状态变化时会通知所有的订阅者，使得它们能够做出反应
  * 当对应的事件被触发时，监听该事件的所有监听函数都会被调用
  * 
  * 观察者模式的代码：
  * 
  * var events = (function() {
  *   var topics = {};
  *  
  *   return {
  *     publish: function(topic, info) {
  *       console.log('publish a topic:' + topic);
  *       if( topics.hasOwnProperty(topic)) {
  *          topics[topic].forEach(function(handler) {
  *            handler(info ? info:{})
  *        })
  *       }
  *     },
  *     subscribe: function(topic, handler) {
  *      console.log('subscribe an topic:' + topic);
  *      if(!topics.hasOwnProperty(topic)) {
  *        topics[topic] = [];
  *      }
  * 
  *      topics[topic].push(handler);
  *     },
  *     remove: function(topic, handler) {
  *       if( !topics.hasOwnProperty(topic)) {
  *         return;
  *       }
  *       var handlerIndex = -1;
  *       topics[topic].forEach(funciton(element, index) {
  *         if(element === handler) {
  *           if(element === handler) {
  *              handlerIndex = index;
  *           }
  *         }
  *       });
  *       if(handlerIndex > = 0) {
  *          topics[topic].splice(handlerIndex, 1);
  *       }
  *     },
  *      removeAll: function(topic) {
  *        console.log('remove all the handler on the topic:' + topic);
  *        if (topics.hasOwnProperty(topic)) {
  *          topics[topic].length = 0;
  *       }
  *     }
  *   }
  * })
  * 
  * 事件由事件模型和事件流
  * 
  * 事件模型： DOM0级模型 原始事件模型 事件不会传播，也没有事件流的概念， 事件监听函数毕竟简单，有两种方式：html代码中直接绑定， JS代码指定属性值（逻辑和显示没有分离--缺点）
  * 
  *           IE事件模型 有两个过程：
  *              * 事件处理阶段（target phase）： 事件到达目标元素，触发目标元素的监听函数
  *              * 事件冒泡阶段（bubbling phase）：事件从目标元素冒泡到document, 依次检查经过的节点是否绑定了事件监听函数，如果有则执行
  *            事件绑定监听函数的方式如下：
  *            attachEvent(eventType, handler)
  *            移除监听函数的方式:
  *            detachEvent(eventType, handler)
  *            eventType指定事件类型（注意加On）
  *            handler是事件处理函数
  * 
  *           DOM2级模型： 属于w3c标准模型，现代浏览器都支持该模型，有三个过程：
  *            * 事件捕获阶段：事件从document一直向下传播到目标元素，依次检查经过的节点是否绑定了事件监听函数，如果有则执行
  *            * 与IE模型一样
  *            * 与IE模型一样
  *            addEventListener(eventType, handler, useCapture)
  *            removeEventListener(eventType, handler, useCapture)
  *            eventType指定事件类型 不要加On
  *            Handler是事件处理函数
  *            useCapture： 默认false,冒泡阶段
  * 
  * 
  *            事件对象
  *            当一个事件被触发时，会创建一个事件对象（event object）,这个对象里包含了与该事件相关的属性和方法，
  *            该对象作为第一个参数传递给监听函数
  *            * DOM 事件模型中的事件对象常用属性：
  *              * type
  *              * target
  *              * stopPropagation()
  *              * preventDefault
  *            * IE 事件模型
  *              * type
  *              * srcElement
  *              * cancelBubble
  *              * returnValue
  * 
  *               Event Wrapper
  *  
  *               事件代理：根据冒泡原理，由父节点的监听函数统一处理多个子元素的事件
  * 
  *               var box = document.getElementById('box');
  *               box.addEventListener('click', function(event) {
  *                 if(event.target.tagName.toLowerCase() === 'input') {
  *                   // some code
  *                 } 
  *               });
  * 
  *             自定义事件
  *         
  * 
  * 
  */
})();

; (function () {
  /*
  * parseInt(val, radix)
  * map(element, index, array)
  * 
  */
})

  ; (function () {
    /*
    * ajax的全程： Asynchronous Javascript And XML , 异步传输js and xml.
    *
    * 1.创建XMLHttpRequest对象，也就是创建一个异步调用对象
    * 2.创建一个新的HTTP请求，并指定该http请求的方法、url及验证信息
    * 3.设置响应请求状态变化的函数
    * 4.发送Http请求
    * 5.获取异步调用返回的数据
    * 6.使用Js和DOM实现局部刷新
    */
  })();

; (function () {
  /*
  * 同步：浏览器访问服务器请求，用户看得到页面刷新，重新发请求，等请求完，页面刷新，新内容出现，用户看到新内容 ，进行下一步操作
  * 异步：浏览器访问服务器请求，用户正常操作，浏览器后端进行请求，等请求完，页面不刷新，新内容也会出现，用户看到新内容。
  *
  */
})();


; (function () {
  // 1. defer, 只支持IE
  // 2. async
  // 3. 创建 script, 插入到DOM中，加载完毕后 callBack

  // https://mp.weixin.qq.com/s/qncHqRRbNUAf0Q2JlX3JrA
})();

; (function () {
  // jsonp、iframe、window.name window.postMessage 服务器上设置代理页面
  // https://mp.weixin.qq.com/s/Ldh6rkcimZ1ppHPHK3KeUQ
})();

; (function () {
  /*
  * ECMAScript 6 是JS语言的下一代标准，在2015年6月正式发布了
  * 它的目标，使得JS语言可以用来编写复杂的大型应用程序，成为企业级开发语言
  * 标准的制定者由计划，以后每年发布一次标准，使用年份作为标准的版本
  * 因为当前es6是在2015年发布的，所以又称ECMAScript 2015
  * 即 ES6就是ES2015
  */
})();

; (function () {
  /*
  * 新的class写法只是让对象原型的写法更加清晰，更像面向对象编程的语法而已。
  */
  // 定义类
  class Point {
    // 构造方法
    constructor(x, y) {
      this.x = x; //this关键字代表实例对象
      this.y = y;
    }
    toString() {
      return '(' + this.x + ',' + this.y + 'y';
    }
  }
})

  ; (function () {
    /*
    * document.write 只能重绘整个页面
    * innderHTML 可以重绘页面的一个部分
    *
    */
  })();

; (function () {
  // 根据功能浏览器的不同特性
  // 如： 检测addEventListener是否支持

  // 通过 userAgent 特征检测
  // eg: navigator.userAgent
})();

; (function () {
  /*
  * Canvas vs SVG
  * 位图技术.png   矢量图技术，不能保存为位图
  * 善于表现颜色和线条细节    可以缩放，不善于表现细节
  * 网页游戏统计图       图标 统计图 地图
  * canvas(一个标签) + getcontext(一个对象) 所有图形靠ctx绘制  几十个标签 --- 每个图形都对应一个标签
  * 不能被搜索引擎爬虫所访问   可以
  * 只能为整个canvas绑定监听函数    每个图形（标签）都可以绑定事件监听函数
  *  
  */
})();

; (function () {
  // 正则 + replace
  function commafy(num) {
    num = num + '';
    var reg = /(-?d+)(d{3})/;
    if (reg.test(num)) {
      num = num.replace(reg, '$1,$2');
    }
    return num;
  }
})();



(function(){
  console.log(1);
  setTimeout(function() { console.log(2) }, 1000);
  setTimeout(function () { console.log(3) }, 0);
  console.log(4);
})();