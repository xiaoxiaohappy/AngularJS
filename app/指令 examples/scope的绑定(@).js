/**
 * Created by xiaoxiao on 2017/6/19.
 */
var myModule=angular.module("MyModule",[]);
myModule.controller('MyCtrl', ['$scope', function($scope){
    $scope.ctrlFlavor="百威";
}])

//一般的方式  link ,link可以操作DOM元素（操作DOM元素在指令中，不要放在controller中）
// myModule.directive("drink", function() {
//     return {
//         template:"<div>{{flavor}}</div>",
//         link:function(scope,element,attrs){
//         	scope.flavor=attrs.flavor;
//         }
//     }
// });


//以下是用绑定的方式  @
myModule.directive("drink", function() {
    return {
        restrict:'AE',
        scope:{
            flavor:'@'
        },
        template:"<div>{{flavor}}</div>"
    }
});