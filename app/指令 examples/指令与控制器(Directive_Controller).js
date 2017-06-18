/**
 * Created by xiaoxiao on 2017/6/18.
 */
var myModule = angular.module("MyModule", []);
myModule.controller('MyCtrl', ['$scope', function($scope){
    $scope.loadData=function(){
        console.log("加载数据中...");
    }
}]);
myModule.controller('MyCtrl2', ['$scope', function($scope){
    $scope.loadData2=function(){
        console.log("加载数据中...22222");
    }
}]);
myModule.directive("loader", function() {
    return {
        restrict:"AE",
        link:function(scope,element,attrs){
            element.bind('mouseenter', function(event) {
                //scope.loadData(); //这是当只有一个控制器MyCtrl的时候的方式一
                // scope.$apply("loadData()");//这是当只有一个控制器MyCtrl的时候的方式二


                // 注意这里的坑，howToLoad会被转换成小写的howtoload
                scope.$apply(attrs.howtoload); //这是当有多个控制器MyCtrl，和MyCtrl2的时候的方式,在html的loader标签上加属性howtoload即可
            });
        }
    }
});