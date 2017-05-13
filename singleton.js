/**
 * @fileOverView: 单例模式
 * @author: xuejian.xu
 * @date: 2017/5/13.
 */

function Person(){}

/**
 * 实现的关键在于利用闭包创建一个唯一的实例
 */
Person.getInstance = function(){
    var instance;

    return function(){
        if(instance){
            return instance;
        }else{
            return instance = new Person();
        }
    }
}();

var person1 = Person.getInstance();

person1.name = 'Jack';

var person2 = Person.getInstance();

console.log(person2.name);