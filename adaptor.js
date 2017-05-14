/**
 * @fileOverView: 适配器模式
 * @author: xuejian.xu
 * @date: 2017/5/14.
 */

function counter(peopleArr){
    console.log(`We have ${peopleArr.length} people, they are ${peopleArr.toString()}`);
}

counter([
    'Jack',
    'Alice',
    'Ben',
    'Peter'
]);

function counterNew(...args){
    console.log(args.toString());
}

counterNew('Alice', 'Ben', 'Peter');

function AdaptorCounter(...args){
    counter(args);
}

AdaptorCounter('Alice', 'Ben', 'Peter', 'Kitty');