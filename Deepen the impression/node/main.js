/**
 * Created by Administrator on 2016/8/30.
 */
'use strict';

// 引入hello模块:
var helloMoudle = require('./hello');
console.log(helloMoudle);
var s = 'Michael';


helloMoudle.greet(s); // Hello, Michael!
helloMoudle.goodbye(s); // goodbye, Michael!
helloMoudle.hello();

console.log(global.console);


