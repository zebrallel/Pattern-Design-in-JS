/**
 * @fileOverView: 代理模式
 * @author: xuejian.xu
 * @date: 2017/5/14.
 */

//演唱会
var Concert = function(){}
//公司
var Company = {
    askforconcert: function(target){
        var concert = new Concert();
        target.openconcert(concert )
    }

}
//明星
var star = {
    openconcert: function(concert){
        console.log("明星同意开一场演唱会")
    }
}
//经纪人代理
var agent = {
    openconcert: function(concert){
        star.openconcert(concert)
    }
}
//执行
Company.askforconcert(agent);  //=>明星同意开一场演唱会