/**
 * @fileOverView: 策略模式
 * @author: xuejian.xu
 * @date: 2017/5/15.
 */

var operators = {
    'add': function(x, y){
        return x + y;
    },

    'time' : function(x, y){
        return x * y;
    },

    'minus' : function(x, y){
        return x - y;
    }
};

function operate(x, y, operator){
    return operators[operator](x, y);
}

console.log(operate(10, 20, 'add'));
console.log(operate(10, 20, 'time'));
console.log(operate(10, 20, 'minus'));