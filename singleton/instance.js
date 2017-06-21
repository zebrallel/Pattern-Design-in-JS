function Person(){}

/**
 * 实现的关键在于利用闭包创建一个唯一的实例
 */
Person.getInstance = function(){
    var instance;

    return function(){
        return instance || (instance = new Person());
    }
}();

module.exports = Person.getInstance();