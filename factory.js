/**
 * @fileOverView: 工厂模式
 * @author: xuejian.xu
 * @date: 2017/5/13.
 */

function A(name) {
    this.name = name;
}

/**
 * 这个ObjectFactory很好地展示了对象的创建过程
 */
function ObjectFactory() {

    var obj = {},
        Constructor = Array.prototype.shift.call(arguments);

    obj.__proto__ = typeof Constructor.prototype === 'number' ? Object.prototype

        : Constructor.prototype;

    var ret = Constructor.apply(obj, arguments);

    return typeof ret === 'object' ? ret : obj;

}

var a = ObjectFactory(A, 'svenzeng');

console.log(a.name);  //svenzeng


/**
 * 这个例子使用工厂模式造不同颜色的汽车
 * @param color
 * @returns {Function}
 * @constructor
 */
function CarFactory(color) {
    return function (name) {
        this.color = color;
        this.name = name;
    }
}

var RedCarFactory = CarFactory('red');

console.log(new RedCarFactory('Benz'));
console.log(new RedCarFactory('BMW'));

var BlueCarFactory = CarFactory('blue');

console.log(new BlueCarFactory('Benz'));
console.log(new BlueCarFactory('BMW'));

