/*
 * 题目：javascript的基本数据类型有哪些，又有哪些复合数据类型
 */
;
(function () {
    /*
     * 基本数据类型
     * Undefined
     * Null
     * Boolean
     * Number
     * String
     *
     * 复合数据类型 
     * Object
     * Array
     * Function
     */
})();
/*
 * 题目：javascript有哪些内置对象
 */
;
(function () {
    // Object是javascript中所有对象的父对象

    // 数据封装类对象：
    // 1. Object
    // 2. Array
    // 3. Boolean
    // 4. Number
    // 5. String

    // 其他对象：
    // 6. Function
    // 7. Argument
    // 8. Math
    // 9. Date
    // 10.RegExp
    // 11.Error
})();
/*
 * 题目：JavaScript 有几种类型的值？能否画一下它们的内存图？
 */
;
(function () {
    /*
     * 栈：原始数据类型（Undefined，Null，Boolean，Number，String）
     * 堆：引用数据类型（对象、数组、函数）
     *
     * 两种类型的区别： 存储位置不同
     * 1. 原始数据类型直接存储在栈(stack)中的简单数据段，
     * 占据空间小、大小固定，属于被频繁使用数据，所以放入栈中存储；
     *
     * 2. 引用数据类型存储在堆(heap)中的对象, 
     * 占据空间大、大小不固定,如果存储在栈中，将会影响程序运行的性能；
     *
     * 3. 引用数据类型在栈中存储了指针，
     * 该指针指向堆中该实体的起始地址。
     * 当解释器寻找引用值时，会首先检索其在栈中的地址，
     * 取得地址后从堆中获得实体。
     */
})();
/*
 * 题目：如何启用严格模式？使用严格模式的区别是什么？
 */
;
(function () {
    'use strict';

    /*
     * use strict是一种ECMAscript 5 添加的（严格）运行模式,
     * 这种模式使得 Javascript 在更严格的条件下运行,
     * 使JS编码更加规范化的模式,
     * 消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为。
     *
     * 默认支持的糟糕特性都会被禁用，比如不能用with，
     * 也不能在意外的情况下给全局变量赋值;
     * 全局变量的显示声明,函数必须声明在顶层，
     * 不允许在非函数代码块内声明函数, arguments.callee也不允许使用；
     * 消除代码运行的一些不安全之处，保证代码运行的安全,
     * 限制函数中的arguments修改，
     * 严格模式下的eval函数的行为和非严格模式的也不相同;
     * 提高编译器效率，增加运行速度；
     * 为未来新版本的Javascript标准化做铺垫。
     */
})();
/*
 * 描述一下变量的区别：
 * null、undefined、undeclared
 */
;
(function () {
    /*
     *
     * 参考答案：
     * null和undefined在判断语句中，都被解析成false
     * console.log(null == undefined); 输出 true
     * console.log(null === undefined); 输出 false
     *
     * null表示"无”的对象，转换为数值时为0
     * typeof null => object
     * null表示"没有对象”，即此处不该有值:
     *     使用场景1： 作为函数的参数，表示该函数的参数不是对象
     *     使用场景2： 作为对象原型链的终点
     *
     * undefined表示"无”的原始值，转换为数值时为NaN
     * typeof undefined => undefined
     * undefined表示"缺少值”，即此处应该有一个值，但是还没有定义:
     *     使用场景1：变量被声明了，但没有赋值时，就等于undefined
     *     使用场景2：调用函数时，应该提供的参数没有提供，该参数等于undefined
     *     使用场景3：对象没有赋值的属性，该属性的值为undefined
     *     使用场景4：函数没有返回值时，默认返回undefined
     *
     * undeclared是一个未声明也未赋值的变量，在严格模式下JavaScript访问会报错。
     */


    var i;
    console.log(i); // undefined

    function fn(x) {
        console.log(x);
    }
    fn(); // undefined

    var o = new Object();
    console.log(o.p); // undefined

    var x = fn();
    console.log(x); // undefined

    function fn2(x) {
        if (x == undefined) {
            alert(1);
        }
        if (x == null) {
            alert(2);
        }
        if (x === undefined) {
            alert(3);
        }
        if (x === null) {
            alert(4);
        }

        alert(x);
    }
    f(); // 弹出：1, 2, 3, undefined
    f(null); // 弹出：1, 2, 4, null
})();
/*
 * 题目：列举几条 javascript 的基本代码规范。
 */
;
(function () {
    // 1. 不要在同一行声明多个变量
    // 2. 如果你不知道数组的长度，使用 push
    // 3. 请使用 ===/!== 来比较 true/false 或者数值
    // 4. 对字符串使用单引号 ''(因为大多时候我们的字符串。特别html会出现")
    // 5. 使用对象字面量替代 new Array 这种形式
    // 6. 绝对不要在一个非函数块里声明一个函数，把那个函数赋给一个变量。浏览器允许你这么做，但是它们解析不同
    // 7. 不要使用全局函数
    // 8. 总是使用 var 来声明变量，如果不这么做将导致产生全局变量，我们要避免污染全局命名空间
    // 9. Switch 语句必须带有 default 分支
    // 10.使用 /**...*/ 进行多行注释，包括描述，指定类型以及参数值和返回值
    // 11.函数不应该有时候有返回值，有时候没有返回值
    // 12.语句结束一定要加分号
    // 13.for 循环必须使用大括号
    // 14.if 语句必须使用大括号
    // 15.for-in 循环中的变量应该使用 var 关键字明确限定作用域，从而避免作用域污染
    // 16.避免单个字符名，让你的变量名有描述意义
    // 17.命名对象、函数和实例时使用驼峰命名规则
    // 18.给对象原型分配方法，而不是用一个新的对象覆盖原型，覆盖原型会使继承出现问题
    // 19.当给事件附加数据时，传入一个哈希而不是原始值，这可以让后面的贡献者加入更多数据到事件数据里，而不用找出并更新那个事件的事件处理器
    // 20. 其他……
})();
/*
 * 题目：call和apply的作用是什么？区别是什么？
 */
;
(function () {
    /*
     * call和apply的功能基本相同，都是实现继承或者转换对象指针的作用；
     * 唯一不通的是前者参数是罗列出来的，后者是存到数组中的；
     * call或apply功能就是实现继承的；与面向对象的继承extends功能相似；但写法不同；
     */

    function demo(arg1, arg2) {
        console.log(this + ':' + arg1, this + ':' + arg2);
    }

    // call的使用：
    demo.call('obj', 'arg1', 'arg2');

    // apply的使用：
    demo.apply('obj', ['arg1', 'arg2']);
})();
/*
 * 题目：push()-pop()-shift()-unshift()分别是什么功能？
 */
;
(function () {
    var a = [1, 2, 3, 4];
    // push(): 将新元素添加到一个数组中，并返回数组的新长度值。
    a.push(5);
    console.log(a); // [1, 2, 3, 4, 5]

    // pop(): 移除数组中的最后一个元素并返回该元素。
    var last = a.pop();
    console.log(last); // 5
    console.log(a); // [1, 2, 3, 4]

    // shift(): 移除数组中的第一个元素并返回该元素。
    var first = a.shift();
    console.log(first); // 1
    console.log(a); // [2, 3, 4]

    // unshift(): 将指定的元素插入数组开始位置并返回该数组。
    a.unshift(6);
    console.log(a); // [6, 2, 3, 4]
})();
/*
 * 题目：试写出大于1024并小于1360屏幕的媒体查询关键CSS代码
 */
;
(function () {
    if (screen.width >= 1024 && screen.width < 1360) {
        setActiveStyleSheet(CSS1);
    }
})();
/*
 * 题目：表述您对javascript this工作原理的理解
 */
;
(function () {
    /*
     * 在函数中：this 通常是一个隐含的参数。
     *
     * 在函数外（顶级作用域中）： 在浏览器中this 指的是全局对象；
     *
     * 在Node.js中指的是模块(module)的导出(exports)。
     *
     * 传递到eval()中的字符串：
     * 如果eval()是被直接调用的，this 指的是当前对象；
     * 如果eval()是被间接调用的，this 就是指全局对象。
     */
    // 可以继续拓展学习，参考：
    // https://mp.weixin.qq.com/s/cNWXVisYTxNMM7-FdwtzyQ
})();
/*
 * 题目：介绍一下 JavaScript 原型，原型链，它们有何特点？
 */
;
(function () {
    /*
     * 每个对象都会在其内部初始化一个属性，就是prototype(原型)，
     * 当我们访问一个对象的属性时，如果这个对象内部不存在这个属性，
     * 那么他就会去prototype里找这个属性，
     * 这个prototype又会有自己的prototype，于是就这样一直找下去，
     * 也就是我们平时所说的原型链的概念。
     *
     * 关系： instance.constructor.prototype = instance.__proto__
     *
     * 特点：JavaScript对象是通过引用来传递的，
     * 我们创建的每个新对象实体中并没有一份属于自己的原型副本，
     * 当我们修改原型时，与之相关的对象也会继承这一改变。
     *
     * 当我们需要一个属性时，JavaScript引擎会先看当前对象中是否有这个属性，
     * 如果没有的话，就会查找它的prototype对象是否有这个属性，
     * 如此递推下去，一致检索到Object内建对象。
     * 
     *  对象__proto__属性的值就是它所对应的原型对象：
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
    };

    var person = new Func();

    console.log(person.getInfo()); // "Xiaosong"

    console.log(Func.prototype); // Func { name = "Xiaosong", getInfo = function() }
})();
/*
 * 题目：JavaScript 如何实现继承？
 */
;
(function () {
    /*
     * 1. 构造继承
     * 2. 原型继承
     * 3. 实例继承
     * 4. 拷贝继承
     */

    /*
     * 原型prototype机制或apply和call方法去实现较简单，建议使用构造函数与原型混合方式。
     */
    function Parent() {
        this.name = 'song';
    }

    function Child() {
        this.age = 28;
    }

    Child.prototype = new Parent(); //通过原型,继承了Parent

    var demo = new Child();

    alert(demo.age);
    alert(demo.name); //得到被继承的属性

    /*
     * 理解继承，可以从这篇文章中学习到完整的教程:
     * https://mp.weixin.qq.com/s/Hjzt0DUd6aXIH84vrf0poQ
     */
})();
/*
 * 题目：JavaScript 有哪几种创建对象的方式？
 */
;
(function () {
    // javascript创建对象简单的说,无非就是使用内置对象或各种自定义对象，当然还可以用JSON；但写法有很多种，也能混合使用。
    // 1. 对象字面量的方式
    var person = {
        firstname: 'Mark',
        lastname: 'Yun',
        age: 25,
        eyecolor: 'black'
    };

    // 2. 用function来模拟无参的构造函数
    function Person() {
        //
    }
    // 定义一个function，如果使用new"实例化",该function可以看作是一个Class
    var person = new Person();
    person.name = 'Xiaosong';
    person.age = 23;
    person.work = function () {
        alert('Hello ' + person.name);
    };
    person.work();

    // 3. 用function来模拟参构造函数来实现（用this关键字定义构造的上下文属性）
    function Person(name, age, hobby) {
        // 注：this作用域为当前对象
        this.name = name;
        this.age = age;
        this.work = work;
        this.info = function () {
            alert('我叫' + this.name + '，今年' + this.age + '岁，是个' + this.work);
        };
    }
    // 实例化、创建对象
    var Xiaosong = new Person('WooKong', 23, '程序猿');
    // 调用info()方法
    Xiaosong.info();

    // 4. 用工厂方式来创建（内置对象）
    var jsCreater = new Object();
    jsCreater.name = 'Brendan Eich'; //JavaScript的发明者
    jsCreater.work = 'JavaScript';
    jsCreater.info = function () {
        alert('我是' + this.work + '的发明者' + this.name);
    }
    jsCreater.info();

    // 5. 用原型方式来创建
    function Standard() {
        //
    }
    Standard.prototype.name = 'ECMAScript';
    Standard.prototype.event = function () {
        alert(this.name + '是脚本语言标准规范');
    }
    var jiaoben = new Standard();
    jiaoben.event();

    // 6. 用混合方式来创建
    function iPhone(name, event) {
        this.name = name;
        this.event = event;
    }
    iPhone.prototype.sell = function () {
        alert('我是' + this.name + '，我是iPhone5s的' + this.event + '~ haha!');
    }
    var SE = new iPhone('iPhone SE', '官方翻新机');
    SE.sell();
})();
/*
 * 题目：new 操作符具体干了什么呢？
 */
;
(function () {
    /*
     * 1. 创建一个空对象，并且 this 变量引用该对象，同时还继承了该函数的原型。
     * 2. 属性和方法被加入到 this 引用的对象中。
     * 3. 新创建的对象由 this 所引用，并且最后隐式的返回 this 。
     */

    var obj = {};
    obj.__proto__ = Base.prototype;
    Base.call(obj);
})();
/*
 * 题目：JavaScript 中，有一个函数，执行对象查找时，永远不会去查找原型，这个函数是哪个？
 */
;
(function () {
    // hasOwnProperty

    /*
     * JavaScript 中 hasOwnProperty 函数方法是返回一个布尔值，
     * 指出一个对象是否具有指定名称的属性。
     * 此方法无法检查该对象的原型链中是否具有该属性；
     * 该属性必须是对象本身的一个成员。
     *
     * 使用方法：object.hasOwnProperty(proName)
     * 其中参数object是必选项，一个对象的实例。
     * proName是必选项，一个属性名称的字符串值。
     *
     * 如果 object 具有指定名称的属性，
     * 那么JavaScript中hasOwnProperty函数方法返回 true，
     * 反之则返回 false。
     */
})();
/*
 * 题目：eval 是做什么的？
 */
;
(function () {
    /*
     * 它的功能是把对应的字符串解析成JS代码并运行；
     * 应该避免使用eval，因为不安全，非常耗性能（2次，一次解析成js语句，一次执行）。
     */
})();
/*
 * 题目：事件是什么？IE与火狐的事件机制有何区别？如何阻止冒泡？
 */
;
(function () {
    /*
     * 1. 我们在网页中的某个操作（有的操作对应多个事件）。
     * 例如：当我们点击一个按钮就会产生一个事件。是可以被 JavaScript 侦测到的行为。
     *
     * 2. 事件处理机制：IE是事件冒泡、Firefox同时支持两种事件模型，
     * 也就是：捕获型事件和冒泡型事件；
     *
     * 3. ev.stopPropagation();（旧ie的方法 ev.cancelBubble = true;）
     */

    /*
     * https://juejin.im/post/59f16ffaf265da43085d4108
     * 彻底理解javascript的事件模型，通过这两个网址：
     * https://segmentfault.com/a/1190000006934031
     * https://www.cnblogs.com/jyybeam/p/5794932.html
     * 
     * * Js事件模型-->观察者模式(发布订阅者模式publish/subscribe), 它可以让多个
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

/**
 * 题目：事件委托
 */
;
(function () {
    /*
    Event.target --> 鼠标点击的元素 （Event.srcElement 是标准的 Event.target 属性的一个别名。它只对老版本的IE浏览器有效。）
    Event.currentTarge --> 事件绑定的元素（事件注册的元素）
    this--> 事件绑定的元素（事件注册的元素）
    */
    /*
    事件捕获： DOM tree 从上而下
    目标阶段：事件注册的元素
    事件冒泡: DOM tree 从下而上
    事件委托利用事件冒泡原理
    IE没有事件捕获阶段
    */
})();

/**
 * 题目: 给元素添加事件，删除事件的兼容性用法
 */
;
(function () {
    //兼容性封装
    (function () {
        var _global;
        var EventUtil = {
            //添加事件监听
            add: function (element, type, callback) {
                if (element.addEventListener) {
                    element.addEventListener(type, callback, false);
                } else if (element.attachEvent) {
                    element.attachEvent('on' + type, callback);
                } else {
                    element['on' + type] = callback;
                }
            },

            //删除事件监听
            remove: function (element, type, callback) {
                if (element.addEventListener) {
                    element.removeEventListener(type, callback, false);
                } else if (element.attachEvent) {
                    element.detachEvent('on' + type, callback);
                } else {
                    element['on' + type] = null;
                }
            },

            //跨浏览器获取event对象
            getEvent: function (event) {
                return event ? event : window.event;
            },

            //跨浏览器获取target对象
            getTarget: function (event) {
                return event.target || event.srcElement;
            },

            //阻止事件的默认行为 
            preventDefual: function (event) {
                if (event.preventDefault) {
                    event.preventDefault();
                } else {
                    event.returnValue = false;
                }
            },

            // 阻止事件流或使用 cancelBubble  
            stopPropagation: function (event) {
                if (event.stopPropagation) {
                    event.stopPropagation();
                } else {
                    event.cancelBubble = true;
                }
            },
        }
        _global = (function () {
            return this || (0, eval)('this');
        })() !('EventUtil' in _global) && (_global.EventUtil = EventUtil);
    })()

    < !DOCTYPE html >
        <
        html >
        <
        meta charset = "UTF-8" >
        <
        title > < /title> <
    script src = "EventUtil.js" > < /script> < /
        head > <
        body >
        <
        div id = "brief" > Hello World < /div> <
    button id = "btn" > 按钮 < /button> <
    button id = "btn2" > 按钮2 < /button> <
    script >
        var btn = document.getElementById('btn');
    var btn2 = document.getElementById('btn2');
    EventUtil.add(btn, 'mousemove', _color); //添加事件句柄
    EventUtil.add(btn2, 'click', close);
    document.onselectstart = function (e) {
        EventUtil.preventDefual(e); //取消默认选择事件
    }

    function _color() {
        document.getElementById('brief').style.color = 'red';
    }

    function close() {
        EventUtil.remove(btn, 'mousemove', _color); //移除事件句柄
    } <
    /script> < /
    body >

        -- -- -- -- -- -- -- -- -- -- -
        作者： 葫芦娃的爱情故事
    来源： CSDN
    原文： https: //blog.csdn.net/hwj0831/article/details/79703956 
        版权声明： 本文为博主原创文章， 转载请附上博文链接！
})
/*
 * 题目：能否写一个通用的事件侦听器函数？
 */
;
(function () {
    //Event工具集，from: github.com/markyunmarkyun.
    var Event = {
        /*
         * 页面加载完成后
         */
        readyEvent: function (fn) {
            if (fn == null) {
                fn = document;
            }
            var oldonload = window.onload;
            if (typeof window.onload != 'function') {
                window.onload = fn;
            } else {
                window.onload = function () {
                    oldonload();
                    fn();
                };
            }
        },
        /*
         * 视能力分别使用 demo0 || demo1 || IE 方式来绑定事件 
         * 参数：操作的元素，事件名称，事件处理程序
         */
        addEvent: function (element, type, handler) {
            if (element.addEventListener) {
                // 事件类型、需要执行的函数、是否捕捉   
                element.addEventListener(type, handler, false);
            } else if (element.attachEvent) {
                element.attachEvent('on' + type, function () {
                    handler.call(element);
                });
            } else {
                element['on' + type] = handler;
            }
        },
        /*
         * 移除事件
         */
        removeEvent: function (element, type, handler) {
            if (element.removeEventListener) {
                element.removeEventListener(type, handler, false);
            } else if (element.datachEvent) {
                element.datachEvent('on' + type, handler);
            } else {
                element['on' + type] = null;
            }
        },
        /*
         * 阻止事件（主要是事件冒泡，因为IE不支持事件捕获） 
         */
        stopPropagation: function (ev) {
            if (ev.stopPropagation) {
                ev.stopPropagation();
            } else {
                ev.cancelBubble = true;
            }
        },
        /*
         * 取消事件的默认行为
         */
        preventDefault: function (event) {
            if (event.preventDefault) {
                event.preventDefault();
            } else {
                event.returnValue = false;
            }
        },
        //获取事件目标
        getTarget: function (event) {
            return event.target || event.srcElemnt;
        },
        //获取event对象的引用，取到事件的所有信息，确保随时能使用event； 
        getEvent: function (e) {
            var ev = e || window.event;
            if (!ev) {
                var c = this.getEvent.caller;
                while (c) {
                    ev = c.argument[0];
                    if (ev && Event == ev.constructor) {
                        break;
                    }
                    c = c.caller;
                }
            }
            retrun ev;
        }
    };
})();
/*
 * 题目：['1', '2', '3'].map(parseInt) 的答案是多少？
 */
;
(function () {
    /*
     * 答案： [1, NaN, NaN]
     *
     * 解析：因为 parseInt 需要两个参数(val,radix)，其中 radix 表示解析时用的基数。
     * map 传了3个(element,index,array)，对应的 radix 不合法导致解析失败。 ????/
     */
})();
/*
 * 题目：什么是闭包(closure)，为什么要用它？
 */
;
(function () {
    /*
     * 闭包是指有权访问另一个函数作用域中变量的函数，
     * 创建闭包的最常见的方式就是在一个函数内创建另一个函数，(一个函数内部定义(不是调用)另一个函数)
     * 通过另一个函数访问这个函数的局部变量，
     * 利用闭包可以突破作用链域，
     * 将函数内部的变量和方法传递到外部。
     *
     * 闭包特性：
     * 1. 函数内再嵌套函数
     * 2. 内部函数可以引用外层的参数和变量
     * 3. 参数和变量不会被垃圾回收机制回收
     *
     * 例如：li节点的onclick事件都能正确的弹出当前被点击的li索引
     * <ul>
     *     <li> index = 0 </li> 
     *     <li> index = 1 </li> 
     *     <li> index = 2 </li> 
     *     <li> index = 3 </li>
     * </ul>
     * <script type="text/javascript"> 
     *     var nodes = document.getElementsByTagName('li'); 
     *     for(i = 0;i<nodes.length;i+=1) {
     *         nodes[i].onclick = function() { 
     *             console.log(i + 1); //不使用闭包的话，值每次都是4
     *         }(i);
     *     }
     * </script>
     */
})();
/*
 * 题目：你对 JSON 了解吗？
 */
;
(function () {
    /*
     * JSON(JavaScript Object Notation)是一种轻量级的数据交换格式。
     * 它是基于JavaScript的一个子集。数据格式简单，易于读写，占用带宽小。
     * 如：{"age": "12", "name": "back"}
     */
})();
/*
 * 题目：Ajax 是什么？如何创建一个 Ajax ？
 */
;
(function () {
    /*
     * ajax的全称：Asynchronous Javascript And XML，异步传输+js+xml。
     *
     * 所谓异步，在这里简单地解释就是：向服务器发送请求的时候，我们不必等待结果，
     * 而是可以同时做其他的事情，等到有了结果它自己会根据设定进行后续操作，
     * 与此同时，页面是不会发生整页刷新的，提高了用户体验。
     *
     * 1. 创建XMLHttpRequest对象,也就是创建一个异步调用对象
     * 2. 创建一个新的HTTP请求,并指定该HTTP请求的方法、URL及验证信息
     * 3. 设置响应HTTP请求状态变化的函数
     * 4. 发送HTTP请求
     * 5. 获取异步调用返回的数据
     * 6. 使用JavaScript和DOM实现局部刷新
     * 
     * 1.创建XmlHttpRequest对象
     * 2.调用open方法设置基本请求信息
     * 3.设置发送的数据，发送请求
     * 4.注册监听的回调函数
     * 5.拿到返回值，对页面进行更新
     */
})();
/*
 * 题目：同步和异步的区别？
 */
;
(function () {
    /*
     * 同步的概念应该是来自于操作系统中关于同步的概念:
     * 不同进程为协同完成某项工作而在先后次序上调整(通过阻塞,唤醒等方式)。
     * 同步强调的是顺序性，谁先谁后；异步则不存在这种顺序性。
     *
     * 同步：浏览器访问服务器请求，用户看得到页面刷新，重新发请求,
     * 等请求完，页面刷新，新内容出现，用户看到新内容,进行下一步操作。
     *
     * 异步：浏览器访问服务器请求，用户正常操作，浏览器后端进行请求。
     * 等请求完，页面不刷新，新内容也会出现，用户看到新内容。
     */
})();
/*
 * 异步加载 JS 的方式有哪些？
 */
;
(function () {
    // 1. defer，只支持 IE
    // 2. async
    // 3. 创建 script，插入到 DOM 中，加载完毕后 callBack

    // 异步相关知识的好文(await/async)：
    // https://mp.weixin.qq.com/s/qncHqRRbNUAf0Q2JlX3JrA
})();
/*
 * 题目：如何解决跨域问题？
 */
;
(function () {
    //jsonp跨域、nginx反向代理、node.js中间件代理跨域、后端设置http header、后端在服务器上设置cors。
    // jsonp、iframe、window.name、window.postMessage、服务器上设置代理页面
    // 具体信息可以学习这篇文章：
    // https://mp.weixin.qq.com/s/Ldh6rkcimZ1ppHPHK3KeUQ ？？？？
})();
/*
 * 谈一谈你对 ECMAScript6 的了解？
 */
;
(function () {
    /*
     * ECMAScript 6 是JavaScript语言的下一代标准，已经在2015年6月正式发布了。
     * 它的目标，是使得JavaScript语言可以用来编写复杂的大型应用程序，成为企业级开发语言。
     * 标准的制定者有计划，以后每年发布一次标准，使用年份作为标准的版本。
     * 因为当前版本的ES6是在2015年发布的，所以又称ECMAScript 2015。
     * 也就是说，ES6就是ES2015
     */
})();
/*
 * ECMAScript 6 怎么写 class ，为何会出现 class？
 */
;
(function () {
    /*
     * ES6的class可以看作只是一个语法糖，它的绝大部分功能，ES5都可以做到，
     * 新的class写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已。
     */

    // 定义类
    class Point {
        // 构造方法
        constructor(x, y) {
            this.x = x; //this关键字代表实例对象
            this.y = y;
        }
        toString() {
            return '(' + this.x + ',' + this.y + ')';
        }
    }

    // 参见 继承 和 原型链等相关知识
})();
/*
 * 题目：document.write 和 innerHTML 有何区别？
 */
;
(function () {
    /*
     * document.write 只能重绘整个页面
     * innerHTML 可以重绘页面的一部分
     */
})();
/*
 * 题目：DOM 操作——怎样添加、移除、移动、复制、创建和查找节点？
 */
;
(function () {
    /*
     * 1. 创建新节点
     * 创建一个DOM片段: createDocumentFragment()
     * 创建一个具体的元素: createElement()
     * 创建一个文本节点: createTextNode()
     *
     * 2. 添加、移除、替换、插入
     * 从尾部添加一个子节点：appendChild()
     * 移除掉某个子节点： removeChild()
     * 替换掉某个子节点：replaceChild()
     * 在已有的子节点前插入一个新的子节点: insertBefore()
     *
     * 3. 查找
     * 通过标签名称: getElementsByTagName()
     * 通过元素的Name属性的值: getElementsByName()
     * 注：IE容错能力较强，会得到一个数组，其中包括id等于name值的
     * 通过元素Id，唯一性: getElementById()
     */
})();
/*
 * 题目：如何编写高性能 JavaScript ？
 */
;
(function () {
    /*
     * 详细文章：浅谈编写高性能的Javascript代码
     * https://www.cnblogs.com/yjbjingcha/p/7029057.html
     */
    /*
     * 哪些操作会造成内存泄漏？
     * 内存泄漏是指任何对象在您不再拥有或需要它之后任然存在。
     * 垃圾回收器定期扫描对象，并计算引用了每个对象的其他对象的数量，
     * 如果一个对象的引用数量为0（没有其他对象引用过该对象），
     * 或对该对象的惟一引用是循环的，那么该对象的内存即可回收。
     *
     * setTimeout 的第一个参数使用字符串而非函数的话，会引发内存泄漏。
     * 闭包、控制台日志、循环（在两个对象彼此引用且彼此保留时，就会产生一个循环）
     */
})();
/*
 * 题目：jQuery 中如何将数组转化为 json 字符串，然后再转化回来？
 */
;
(function () {
    /*
     * jQuery 中没有提供这个功能，所以需要先编写两个 jQuery 的扩展：
     */
    $.fn.stringifyArray = function (array) {
        return JSON.stringify(array);
    };
    $.fn.parseArray = function (array) {
        return JSON.parse(array);
    };
    // 然后调用:
    $("").stringifyArray(array);
})();
/*
 * 题目：jQuery.extend 与 jQuery.fn.extend 有何区别？
 */
;
(function () {
    /*
     * jQuery.extend(object);
     * 为jQuery类添加类方法，可以理解为添加静态方法
     */
    jQuery.extend({
        min: function (a, b) {
            return a < b ? a : b;
        },
        max: function (a, b) {
            return a > b ? a : b;
        }
    });
    jQuery.min(2, 3); // 2
    jQuery.max(4, 5); // 5

    /*
     * jQuery.extend(target, object1, [objectN])
     * 用一个或多个其他对象来扩展一个对象，返回被扩展的对象
     */

    /*
     * jQuery.fn.extend(object);
     * 对jQuery.prototype进行的扩展，就是为jQuery类添加"成员函数”。
     * jQuery类的实例可以使用这个"成员函数”。
     *
     * 比如我们要开发一个插件，做一个特殊的编辑框，当它被点击时，
     * 便alert 当前编辑框里的内容。
     * 可以这么做：
     */
    $.fn.extend({
        alertWhileClick: function () {
            $(this).click(function () {
                alert($(this).val());
            });
        }
    });
    $("#input1").alertWhileClick();
    /*
     * 页面上为$("#input1")为一个jQuery实例，
     * 当它调用成员方法 alertWhileClick后，
     * 便实现了扩展，每次被点击时它会先弹出目前编辑里的内容。
     */
})();
/*
 * 题目：是否了解针对 jQuery 性能的优化方法？
 */
;
(function () {
    /*
     * 基于Class的选择性的性能相对于Id选择器开销很大，因为需遍历所有DOM元素。
     *
     * 频繁操作的DOM，先缓存起来再操作。
     * 用Jquery的链式调用更好。
     * 比如：var str=$("a").attr("href");
     */
    for (var i = size; i < arr.length; i++) {
        //
    }
    /*
     * for 循环每一次循环都查找了数组 (arr) 的.length 属性，
     * 在开始循环的时候设置一个变量来存储这个数字，
     * 可以让循环跑得更快：
     */
    for (var i = size, length = arr.length; i < length; i++) {
        //
    }
})();
/*
 * 题目：jQuery 与 jQuery UI 有何区别？
 */
;
(function () {
    /*
     * jQuery是一个js库，主要提供的功能是选择器，属性修改和事件绑定等等。
     * jQuery UI则是在jQuery的基础上，利用jQuery的扩展性，设计的插件。
     * 提供了一些常用的界面元素，诸如对话框、拖动行为、改变大小行为等等
     */
})();
/*
 * 题目：如何判断当前脚本运行在浏览器还是 node 环境中？（阿里）
 */
;
(function () {
    // 通过判断 Global 对象是否为 window ，如果不为 window ，当前脚本没有运行在浏览器中
})();
/*
 * 题目：怎样用js实现千位分隔符？
 */
;
(function () {
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
/*
 * 题目：检测浏览器版本有哪些方式？
 */
;
(function () {
    // 根据功能检测不同浏览器的特性
    // 如：检测addEventListener是否支持

    // 通过 userAgent 特征检测
    // 比如：navigator.userAgent
    // "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.101 Safari/537.36"
})();
/*
 * 题目：Canvas 和 SVG 的比较
 */
;
(function () {
    /*
     * | --------------------------------- | ---------------------------------- |
     * |                Canvas             |                SVG                 |
     * | --------------------------------- | ---------------------------------- |
     * |        位图技术，可以保存为.png     |      矢量图技术，不能保存为位图      |
     * | --------------------------------- | ---------------------------------- |
     * |        善于表现颜色和线条细节       |       可以缩放，不善于表现细节       |
     * | --------------------------------- | ---------------------------------- |
     * |        网页游戏统计图              |       图标，统计图，地图             | 
     * | --------------------------------- | ---------------------------------- |
     * |        一个标签(canvas)            |                                    |
     * |        + 一个对象(getcontext)      |                                    |
     * |       所有图形图像都靠ctx绘制       |   几十个标签---每个图形对应一个标签   |
     * | --------------------------------- | ---------------------------------- |
     * |      不能被搜索引擎爬虫所访问       |           可以                      |
     * | --------------------------------- | ---------------------------------- |
     * |    只能为整个 Canvas绑定监听函数    |  每个图形（标签）可以绑定事件监听函数 |
     * | --------------------------------- | ---------------------------------- |
     */
})();
/*
 * 题目：谈谈你对 JavaScript 中的模块规范 CommonJS、AMD、CMD 的了解？
 */
;
(function () {
    //个人拙见
    /*
     * | CommonJS |   AMD   | CMD     |
     * |----------|---------|---------|
     * | Node.js  |RequireJS| SeaJS   |
     */
    // 详细文章：
    // http://www.php.cn/js-tutorial-360130.html
    // https://segmentfault.com/a/1190000006232697
})();
/*
 * HTTP协议的状态消息都有哪些?(如200、302对应的描述)国内外的JS牛人都知道哪些?
 */
;
(function () {
    /*
     * 协议是指计算机通信网络中两台计算机之间进行通信所必须共同遵守的规定或规则，
     * 超文本传输协议(HTTP)是一种通信协议，它允许将超文本标记语言(HTML)
     * 文档从Web服务器传送到客户端的浏览器，
     * 
     * "100": Continue（继续） 初始的请求已经接受，客户应当继续发送请求的其余部分。（HTTP 1.1新）
     * "101": Switching Protocols（切换协议） 请求者已要求服务器切换协议，服务器已确认并准备进行切换。（HTTP 1.1新）
     * "200": OK（成功） 一切正常，对GET和POST请求的应答文档跟在后面。
     * "201": Created（已创建）服务器已经创建了文档，Location头给出了它的URL。
     * "202": Accepted（已接受）服务器已接受了请求，但尚未对其进行处理。
     * "203": Non-Authoritative Information（非授权信息） 文档已经正常地返回，但一些应答头可能不正确，可能来自另一来源 。（HTTP 1.1新）。
     * "204": No Content（无内容）未返回任何内容，浏览器应该继续显示原来的文档。
     * "205": Reset Content（重置内容）没有新的内容，但浏览器应该重置它所显示的内容。用来强制浏览器清除表单输入内容（HTTP 1.1新）。
     * "206": Partial Content（部分内容）服务器成功处理了部分 GET 请求。（HTTP 1.1新）
     * "300": Multiple Choices（多种选择）客户请求的文档可以在多个位置找到，这些位置已经在返回的文档内列出。如果服务器要提出优先选择，则应该在Location应答头指明。
     * "301": Moved Permanently（永久移动）请求的网页已被永久移动到新位置。服务器返回此响应（作为对 GET 或 HEAD 请求的响应）时，会自动将请求者转到新位置。
     * "302": Found（临时移动）类似于301，但新的URL应该被视为临时性的替代，而不是永久性的。注意，在HTTP1.0中对应的状态信息是"Moved Temporatily”，出现该状态代码时，浏览器能够自动访问新的URL，因此它是一个很有用的状态代码。注意这个状态代码有时候可以和301替换使用。例如，如果浏览器错误地请求http://host/~user（缺少了后面的斜杠），有的服务器返回301，有的则返回302。严格地说，我们只能假定只有当原来的请求是GET时浏览器才会自动重定向。请参见307。
     * "303": See Other（查看其他位置）类似于301/302，不同之处在于，如果原来的请求是POST，Location头指定的重定向目标文档应该通过GET提取（HTTP 1.1新）。
     * "304": Not Modified（未修改）自从上次请求后，请求的网页未被修改过。原来缓冲的文档还可以继续使用，不会返回网页内容。
     * "305": Use Proxy（使用代理）只能使用代理访问请求的网页。如果服务器返回此响应，那么，服务器还会指明请求者应当使用的代理。（HTTP 1.1新）
     * "307": Temporary Redirect（临时重定向）和 302（Found）相同。许多浏览器会错误地响应302应答进行重定向，即使原来的请求是POST，即使它实际上只能在POST请求的应答是303时才能重定向。由于这个原因，HTTP 1.1新增了307，以便更加清除地区分几个状态代码：当出现303应答时，浏览器可以跟随重定向的GET和POST请求；如果是307应答，则浏览器只能跟随对GET请求的重定向。（HTTP 1.1新）
     * "400": Bad Request（错误请求）请求出现语法错误。
     * "401": Unauthorized（未授权）客户试图未经授权访问受密码保护的页面。应答中会包含一个WWW-Authenticate头，浏览器据此显示用户名字/密码对话框，然后在填写合适的Authorization头后再次发出请求。
     * "403": Forbidden（已禁止） 资源不可用。服务器理解客户的请求，但拒绝处理它。通常由于服务器上文件或目录的权限设置导致。
     * "404": Not Found（未找到）无法找到指定位置的资源。
     * "405": Method Not Allowed（方法禁用）请求方法（GET、POST、HEAD、DELETE、PUT、TRACE等）禁用。（HTTP 1.1新）
     * "406": Not Acceptable（不接受）指定的资源已经找到，但它的MIME类型和客户在Accpet头中所指定的不兼容（HTTP 1.1新）。
     * "407": Proxy Authentication Required（需要代理授权）类似于401，表示客户必须先经过代理服务器的授权。（HTTP 1.1新）
     * "408": Request Time-out（请求超时）服务器等候请求时超时。（HTTP 1.1新）
     * "409": Conflict（冲突）通常和PUT请求有关。由于请求和资源的当前状态相冲突，因此请求不能成功。（HTTP 1.1新）
     * "410": Gone（已删除）如果请求的资源已被永久删除，那么，服务器会返回此响应。该代码与 404（未找到）代码类似，但在资源以前有但现在已经不复存在的情况下，有时会替代 404 代码出现。如果资源已被永久删除，那么，您应当使用 301 代码指定该资源的新位置。（HTTP 1.1新）
     * "411": Length Required（需要有效长度）不会接受包含无效内容长度标头字段的请求。（HTTP 1.1新）
     * "412": Precondition Failed（未满足前提条件）服务器未满足请求者在请求中设置的其中一个前提条件。（HTTP 1.1新）
     * "413": Request Entity Too Large（请求实体过大）请求实体过大，已超出服务器的处理能力。如果服务器认为自己能够稍后再处理该请求，则应该提供一个Retry-After头。（HTTP 1.1新）
     * "414": Request-URI Too Large（请求的 URI 过长）请求的 URI（通常为网址）过长，服务器无法进行处理。
     * "415": Unsupported Media Type（不支持的媒体类型）请求的格式不受请求页面的支持。
     * "416": Requested range not satisfiable（请求范围不符合要求）服务器不能满足客户在请求中指定的Range头。（HTTP 1.1新）
     * "417": Expectation Failed（未满足期望值）服务器未满足”期望”请求标头字段的要求。
     * "500": Internal Server Error（服务器内部错误）服务器遇到错误，无法完成请求。
     * "501": Not Implemented（尚未实施） 服务器不具备完成请求的功能。例如，当服务器无法识别请求方法时，服务器可能会返回此代码。
     * "502": Bad Gateway（错误网关）服务器作为网关或者代理时，为了完成请求访问下一个服务器，但该服务器返回了非法的应答。
     * "503": Service Unavailable（服务不可用）服务器由于维护或者负载过重未能应答。通常，这只是一种暂时的状态。
     * "504": Gateway Time-out（网关超时） 由作为代理或网关的服务器使用，表示不能及时地从远程服务器获得应答。（HTTP 1.1新）
     * "505": HTTP Version not supported（HTTP 版本不受支持）不支持请求中所使用的 HTTP 协议版本。
     * 国内的比较牛的人：淘宝网UED官方博客。灵玉，大成小胖，承玉，拔赤
     */
})();

/*
  页面文档完全加载并解析完毕之后会触发的是事件是 DOMContentLoaded
*/

/*
  动静态资源存储分离（放在不同服务器上）的好处？
*/
;
(function () {
    // 1. 并发请求数量是针对域名的（包括二级域名）, 分不同服务器可以提高最大并发请求数
    // 2. 网络请求时的cookie传输，当静态资源与主服务在同一个域名下（业务需要，一般主服务情书时需要传输cookie信息），
    // 每次静态请求加上无用的cookie，消耗带宽
    // 3. 方便分流和缓存，静态资源独立了部署，为全局产品服务，例如一个静态资源服务上的静态资源可以同时给好几个服务器的产品使用，
    // 这些资源不必从属于某个产品。
})();

/*
tree shaking
*/
;
(function () {
    /*
      1.为什么要进行tree shaking
       我们项目中没有使用到的代码在打包的时候丢弃掉，只保留我们引入了的JS代码和css代码。
       1.1：JS的tree shaking ---> UglifyjsWebpackPlugin 
       1.2: CSS的tree shaking ---> purifycss-webpack 配合 glob-all来实现 。
    */
})();

/*
 */
/*
 * 
 * ES5和ES6的区别，ES6新增了哪些特性，
 */
;
(function () {
    //http://caibaojian.com/toutiao/6864
    //https://segmentfault.com/a/1190000004365693
})();



/*
如何在不清缓存的情况下，使得用户看到的是最新版本的东西
*/
;
(function () {
    //输出文件名，改为变量加上哈希值，避免页面引入js有缓存的情况
})();
/*
定时器的执行顺序或机制
*/
;
(function () {
    //因为js是单线程的, 浏览器遇到setTimeout 或者 setInterval会执行完
    //当前的代码块，在此之前会把定时器推入浏览器的待执行事件队列里面，等到浏览器执行完
    //当前代码之后会看一下事件队列里面有没有任务，有的话才执行定时器的代码。
    //即使把定时器的时间设置为0还是会先执行当前的一些代码
})();

/*
html中title属性和alt属性的区别
*/
;
(function () {
    // title可以用在除了base, basefont, head, html, meta,param, script和title之外的所有标签
    // title属性的功能是提示。额外的说明信息和非本质的信息请使用title属性。title属性值可以比alt
    // 属性值设置的更长。
    // title属性有一个很好的用途，即为链接添加描述性文字，特别是链接本身并不是十分清楚的表达了链接的目的。

    // 1.<img src="#" alt="alt信息" title="title信息" />
    //   1.1 当图片不输出信息的时候，会显示alt信息，鼠标放上去会出现title信息
    //   1.2 当图片正常输出的时候，不会出现alt信息，鼠标放上去会出现title信息
})();


/*
  标准盒子模型与Ie怪异盒子模型
*/
;
(function () {
    // box-sizing: content-box || border-box 
    // css3将box-sizing设置为border-box将使用怪异盒子模型
    //当怪异盒子的宽度小于border+padding的宽度的时候，content width将变为0，盒子的宽度会被border和padding的总宽度撑开
    //
    // <div style="width: 100px; height="100px"; border:10px; padding: 10px;"></div>
    // 
    // 标准盒子模型: width = content 100px + border 10px*2 + padding 10px*2 //140px
    // 怪异盒子模型：width = content 60px + border 10px *2 + padding 10px*2 //100px
    //
});

;
(function () {
    // ES5的继承和ES6的继承有什么区别？
    // ES5的继承时通过prototype或构造函数机制来实现。ES5的继承实质上是先创建子类的实例对象，然后再将父类的方法添加到this上（Parent.apply(this)）。
    // ES6的继承机制完全不同，实质上是先创建父类的实例对象this（所以必须先调用父类的super()方法），然后再用子类的构造函数修改this。
    // 具体的：ES6通过class关键字定义类，里面有构造方法，类之间通过extends关键字实现继承。子类必须在constructor方法中调用super方法，否则新建实例报错。因为子类没有自己的this对象，而是继承了父类的this对象，然后对其进行加工。如果不调用super方法，子类得不到this对象。
    // ps：super关键字指代父类的实例，即父类的this对象。在子类构造函数中，调用super后，才可使用this关键字，否则报错。
})();

/*
 如何对一个数组去重？
*/
;
(function () {
    //es6提供了新的数据结构Set, 类似于数组，但是成员的值都是唯一的，没有重复的值
    let array = ['1', '2', '3', '4', NaN, NaN, undefined, undefined, null]
    let unique = [...new Set(array)]
    console.log(unique)
})();

;
(function () {
    // 遍历，将值添加到新数组,用indexOf()判断是否存在，如果已存在就不添加，达到去重效果
    let a = ['1', '2', '3', '4', NaN, NaN, undefined, undefined, null]
    let unique = arr => {
        let newA = [];
        arr.forEach(key => {
            if (newA.indexOf(key) < 0) {
                newA.push(key)
            }
        })
        return newA
    }
    console.log(unique(a)) //["1", "2", "3", 1, NaN, NaN, undefined, null, "a", "b"]
    //ps:这个方法不能分辨NaN,会出现两个NaN。是有问题的，下面那个方法好一点。
})();

;
(function () {
    // 遍历，将数组的值添加到一个对象的属性名里，并给属性赋值，对象不能添加相同属性名，
    // 以这个为依据可以实现数组去重,然后用Object.keys(对象)返回这个对象可枚举属性组成的数组，
    // 这个数组就是去重后的数组。
    let a = ['1', '2', '3', underfined, NaN, null, 'a']
    const unique = arr => {
        let newA = {}
        arr.forEach(key => {
            new [key] = 0
        })
        return Object.keys(newA)
    }
    console.log(unique(a)) //["1", "2", "3", "NaN", "undefined", "null", "a", "b"]
    //这个方法会将 number,NaN,undefined,null，变为字符串形式，
    //因为对象的属性名就是一个字符串，根据需求来吧，想想还是Set去重最简单也最有效。
})();

/*
垂直居中有哪些方法？
 */
;
(function () {
    // 1. 单行文本：line-height = height
    // 2. position + margin:  设置元素：position: relative, 
    //                        子元素: height: 100px; position: absolute; top: 50%; margin-top: -50px; (定高)
    // 3. position + transform:  设置元素：position: relative,
    //                           子元素：position: absolute; top: 50%; transform: translate(0, -50%); (不定高)
    // 4.百搭flex布局（ie 10+）: 设置元素： display: flex; align-items: center; (不定高)

})();

/*
翻转字符串
先将字符串转成一个数组，然后用数组的reverse() + join()方法
*/
;
(function () {
    let testString = 'test string'
    let result1 = [...testString].reverse().join('')
    console.log(result1)








    let testString2 = 'test string';
    let a = testString2.split("").reverse().join('')
    console.log(a)
})();

/*
for循环的作用域问题
*/
//写出下面代码输出值，尝试es5和es6的方式进行改进输出循环中的i值
for (var i = 1; i <= 5; i++) {
    setTimeout(function timer() {
        console.log(i)
    }, i * 1000);
}
//输出5个6，因为回调函数在for循环之后执行，所有函数共享一个i的引用。

// es5:
for (var i = 1; i <= 5; i++) {
    (function (j) {
        setTimeout(function timer() {
            console.log(j)
        }, j * 1000);
    })(i);
}

// es6:
for (let i = 1; i < 5; i++) {
    setTimeout(function timer() {
        console.log(i)
    }, i * 1000)
}

//前端存储之sessionStorage、localStorage、cookie和indexedDB
;
(function () {
    // 一、js三种存储方式区别 
    // sessionStorage、localStorage、cookie 
    // 相同点：都保存在浏览器端，同源的： 
    // 不同点： 
    // 1》传递方式不同 
    // cookie数据始终在同源的http请求中携带(即使不需要)，即cookie在浏览器和服务器间来回传递。 
    // sessionStorage和loaclStorage不会自动把数据发给服务器，仅在本地保存。 
    // 2》数据大小不同 
    // cookie数据还有路径(path)的概念，可以限制cookie只属于某个路径下。 
    // 存储大小限制也不同，cookie数据不能超过4k，同时因为每次http请求都会携带cookie，所以cookie只适合保存很小的数据，如会话标识。 
    // sessionStorage和localStorage虽然也有存储大小的限制,但比cookie大得多，可以达到5M或者更大。 
    // 3》数据有效期不同 
    // sessionStorage:仅在当前浏览器窗口关闭前有效，自然也就不可能持久保持； 
    // localStorage:始终有效，窗口或浏览器关闭也一直保存，因此用作持久数据； 
    // cookie只在设置cookie过期时间之前一直有效，即使窗口或浏览器关闭。 
    // 4》作用域不同 
    // sessionStorage不在不同的浏览器窗口中共享，即使是同一个页面； 
    // localStorage在所有同源窗口中都是共享的； 
    // cookie也是在所有同源窗口中都是共享的。 
    // Web Storage支持事件通知机制，可以将数据更新的通知发送给监听者。 
    // Web Storage的api接口使用更方便。 
    // --------------------- 
    // 作者：唐策 
    // 来源：CSDN 
    // 原文：https://blog.csdn.net/qq_29132907/article/details/80389398 
    // 版权声明：本文为博主原创文章，转载请附上博文链接！
})

//let & var 得区别
;
(function () {
    1. 变量提升
    2. 作用域 - 》上下文， 只在代码块有效， 全局作用域函数作用域
    3. var允许重复声明
    let 不允许
    4. 暂时性死区
})


//对dpr的理解
;
(function () {
    // dpr 设备像素比 设备像素比 = 设备像素 / css像素（垂直方向或水平方向）。可以通过JS来获取：window.devicePixelRatio
    // https://segmentfault.com/a/1190000011586301#articleHeader4
})

//相对路径的理解
;
(function () {
    //同级
    //同级直接编写: 例如： girl.png
    //加上./编写，例如./girl.png
    //./代表当前目录,./girl.png代表在当前目录下查找

    //下级
    //直接编写, 例如abc/girl.png
    //加上./ 编写, 例如./abc/girl.png
    //相对当前目录有几个文件夹,就在后面依次补全几个文件夹名称即可, 例如abc/bbb/ccc/ddd/girl.png或./abc/bbb/ccc/ddd/girl.png

    //上级
    //../代表访问上级目录
    //假设a文件夹下面有b文件夹, 图片存放在a文件夹中, html文件存放在b文件夹中, 那么路径为../girl.png因为html文件在b文件夹中, 
    //所以路径是相对于b文件夹的, 所以../代表访问b文件夹的上一级目录, b文件夹的上一级目录是a文件夹, 
    //所以../girl.png就代表在a文件夹查找girl.png

    //注意:

    //1.路径中不要出现中文, 否则可能出现未知问题

    //2.如果是通过"相对路径"来指定图片, 不能跨盘符

    //2.1例如.html文件在C盘, 那么不能去查找D盘图片  

})
// 以上相对的都是基础知识
// 这个网址上的题目也和上面整理的类似，只不是答案有些也可以借鉴：
// http://www.bslxx.com/a/mianshiti/tiku/javascript/2017/1215/1513.html

// 接下来这两个链接的是实际的编码和逻辑的实践面试题
// 涉及到的：算法、高阶函数
// http://www.bslxx.com/a/mianshiti/tiku/javascript/2017/1028/1108.html
// http://www.bslxx.com/a/mianshiti/tiku/javascript/2017/1028/1109.html

// 歪，以上涉及到的内容有：
// 数据类型、对象、继承、闭包、作用域、原型链、事件、AJAX、跨域等核心知识。
// 如果你都认认真真的去学习了，理解了，并且能够实践应用了，
// 那么可以列入中高级前端工程师了，
// 高级前端工程师关键点在于javascript，不在于切图、写CSS。