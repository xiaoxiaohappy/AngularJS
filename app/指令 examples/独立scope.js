/**
 * Created by xiaoxiao on 2017/6/19.
 */
// var myModule=angular.module("MyModule",[]);
// myModule.directive("hello", function() {
//     return {
//         restrict: 'AEMC',//A属性(默认)，E元素，C样式类，M注释
//         template: '<div><input type="text" ng-model="userName">{{userName}}</div>',  //可以使用templateUrl:'something.html'
//         replace: true
//     }
// });
//这个样子，会使任意一个input内容改变时，所有的iinput和后面的值都改变   因为是一个作用域


//这时要创立独立的scope   加一句话即可scope:{},
var myModule=angular.module("MyModule",[]);
myModule.directive("hello", function() {
    return {
        restrict: 'AEMC',//A属性(默认)，E元素，C样式类，M注释
        scope:{},
        template: '<div><input type="text" ng-model="userName">{{userName}}</div>',  //可以使用templateUrl:'something.html'
        replace: true
    }
});
