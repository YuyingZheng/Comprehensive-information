import {firstName, lastName, year as birthYear} from './profile';
import { area, circumference } from './circle'; 
// import * as circle from './circle';
import customeName from './export-default';

import _,{each,each as forEach} from 'lodash';

function setNmae() {  
    console.log(firstName +' '+ lastName);
}

console.log('圆面积：' + area(4));
console.log('圆周长：' + circumference(14));
// console.log('圆面积：' + circle.area(4));
// console.log('圆周长：' + circle.circumference(14));

customeName();//foo