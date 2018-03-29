'use strict';

var s = 'Hello';
var bye="good-bye"
function greet(name) {
    console.log(s + ', ' + name + '!');
}
function goodBye(name){
    console.log(bye+','+name+'!')
}
function hello(){
    console.log("hello world!")
}
module.exports = {
    greet:greet,
    goodbye:goodBye,
    hello:hello
};



