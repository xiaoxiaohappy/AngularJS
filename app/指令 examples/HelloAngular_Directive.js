var myModule = angular.module("MyModule", []);
myModule.directive("hello", function() {
    return {
        restrict: 'AEMC',//A属性(默认)，E元素，C样式类，M注释
        template: '<div>Hi everyone!</div>',  //可以使用templateUrl:'something.html'
        replace: true
    }
});