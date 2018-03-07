import _ from 'lodash';
import style from './css/style.css';
import logo from './image/webpack.svg'
import dataJson from './data/data.json';
import dataXml from './data/data.xml';
import printMe from './print.js';

import {cube} from './math.js';

function component() {
    var element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    // Lodash, now imported by this script
    var pText = document.createElement('p');
    pText.textContent =  _.join(dataJson.helloText,' ');

    var webpackLogo = new Image();
    webpackLogo.src = logo;
    webpackLogo.classList.add(style.logo);

    element.classList.add(style.hello);
    element.appendChild(webpackLogo);
    element.appendChild(pText);
    
    console.log(dataXml);

    //--printMe
    var btn = document.createElement('button');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);

    //-pre math

    var preTag = document.createElement('pre');
    preTag.innerHTML = ['hello webpack!','5 cubed is equal to ' + cube(5)].join('\n\n')
    element.appendChild(preTag);

    return element;
}

// document.body.appendChild(component());
let element = component();//当 print.js 改变导致页面重新渲染时，重新获取渲染的元素
document.body.appendChild(element);

// update module
if(module.hot){
    module.hot.accept('./print.js',function (){
        console.log('Accepting the updated printMe Module!');
        document.body.removeChild(element);
        element = component();//重新渲染页面后，component更新click事件处理
        document.body.appendChild(element);
    });
}