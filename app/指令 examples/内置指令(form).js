/**
 * Created by YXX on 2017/6/21.
 */
var myModule=angular.module("form_directive",[])

myModule.controller("myCtrl",function ($scope) {
    $scope.user={
        userName:'xiaoxiao',
        passWord:''
    }
    $scope.save=function () {
        alert("成功保存数据")
    }
})