/**
 * Created by xiaoxiao on 2017/6/19.
 */
var myModule=angular.module("MyModule",[]);
myModule.directive("superman",function(){
    return{
        scope:{},//创建作用域
        restrict:'AE',


        //这个controller不同于MVC中的controller，这个controller是用来放指令要暴露在外面的内容
        controller:function ($scope) {
            $scope.abilities=[];
            this.addStrength=function () {
                $scope.abilities.push("strength")
            };
            this.addSpeed=function () {
                $scope.abilities.push("speed")
            };
            this.addLight=function () {
                $scope.abilities.push("light")
            };
        },

        //link用来处理指令内部
        link:function (scope,element,attrs) {
            element.addClass('btn btn-primary');
            element.bind("mouseenter",function () {
                console.log(scope.abilities);
            });
        }
    }
});
myModule.directive("strength",function () {
    return{
        require:'^superman',
        link:function (scope,element,attrs,supermanCtrl) {
            supermanCtrl.addStrength();
        }
    }
})
myModule.directive("speed",function () {
    return{
        require:'^superman',
        link:function (scope,element,attrs,supermanCtrl) {
            supermanCtrl.addSpeed();
        }
    }
})
myModule.directive("light",function () {
    return{
        require:'^superman',
        link:function (scope,element,attrs,supermanCtrl) {
            supermanCtrl.addLight();
        }
    }
})
