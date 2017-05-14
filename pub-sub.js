/**
 * @fileOverView: 观察者模式(发布订阅)
 * @author: xuejian.xu
 * @date: 2017/5/13.
 */


class Emmiter {
    constructor(){
        this.listeners = {};
    }

    on(eventName, callback){
        if(!this.listeners[eventName]){
            this.listeners[eventName] = [];
        }

        this.listeners[eventName].push(callback);

    }

    trigger(eventName, data){
        if(!this.listeners[eventName]){
            return;
        }

        this.listeners[eventName].forEach((callback)=>{
            callback(data);
        });
    }
}

class Person extends Emmiter{
    constructor(name){
        super();

        this.name = name;
    }
}

let Alice = new Person('Alice');

Alice.on('sad', function(){
    console.log('Im sad 1');
});

Alice.on('sad', function(){
    console.log('im sad 2');
});

Alice.trigger('sad');