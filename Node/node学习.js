1.Js和nodeJs的区别
2. Node每个文件就是一个模块，每个模块都有自己的作用域
3. _filename->当前文件被解析过的路径
4. /* 模块加载系统*/ require('模块')
5.
/*  
* 模块加载机制
* 路径 
*   绝对路径 require('b/../2.js')
*   相对路径 require('./2.js')
*   node核心模块 require('2.js')
*/

/*
* 模块查找机制
* 1. 首先按照加载的模块的文件名称进行查找
* 2. 如果没有找到，则会在模块文件名称后加上.js的后缀，进行查找
* 3. 如果没有找到，则会在模块文件名称后加上.json的后缀，进行查找
* 4.如果没有找到，则会在模块文件名称后加上.node的后缀，进行查找
* 文件名称 ——>.js ——>.json——>.node
*/

6./**
  * 模块作用域
  * 如果想一个模块能够访问另外一个模块中定义的变了，可以
  * 1. 把变量作为global对象的一个属性，但是这样的做法是不推荐的
  * 2. 是用模块对象Mobule: 保存和当前模块相关信息
  * 如果有元素想要抛出去，提供访问，可以把元素挂载在module.exports的对象中，通过module.exports对外提供；
  * 外部require来的模块，就是等于module.exports
  * 在模块作用域下，，还有一个内置的模块对象：exprots,他其实就是module.exports
  * module.exports === exports (true)
  * 
  * 注意不要去改变module.exports和exports的指向，改变了，两个就不一样了。
  * 最好是在两个对象下去添加一些属性
 */

 7. /**
    * __filename: 返回当前模块文件的解析后的绝对路径，该属性并非全局，而是模块作用域下的
    * __dirname: 返回当前模块文件所在目录解析后的绝对路径, 该属性并非全局，而是模块作用域下的
  */

8. /**
  * 全局对象即Global下的对象，他返回当前进程下的一些信息
  * process: 他是一个全局对象 process === global.process
  * process.argv、process.versions、process.chdir
  * process.stdin、 process.stdout(标准输入输出流)提供了操作输入数据和输出数据的方法，我们称为
  * 
 */

