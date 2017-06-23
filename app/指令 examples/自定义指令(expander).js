/**
 * Created by YXX on 2017/6/22.
 */
var expanderModule=angular.module('zijidingyi',[]);

expanderModule.directive('expander',function () {
    return{
        restrict:'EA',
        replace:true,
        transclude:true,
        scope:{
            title:'=expanderTitle'
        },
        template:'<div>'
                    +'<div class="title" ng-click="toggle()">{{title}}</div>'

                    //ng-transclude作用：点击title后会跳出
                    +'<div class="body" ng-show="showMe" ng-transclude></div>'
                    +'</div>',
        link:function (scope,ele,attrs) {
            scope.showMe=false;
            scope.toggle=function(){
                scope.showMe=!scope.showMe;
                console.log(scope.showMe)
            }
        }
    }
});
expanderModule.controller('myCtrl',function ($scope) {
    $scope.title='请点击我';
    $scope.text='这是展开之后的内容'
});














