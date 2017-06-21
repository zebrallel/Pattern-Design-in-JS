/**
 * @fileOverView: 单例模式
 * @author: xuejian.xu
 * @date: 2017/5/13.
 */


var person1 = require('./instance');

person1.name = 'Jack';

var person2 = require('./instance');

console.log(person2.name); //Jack