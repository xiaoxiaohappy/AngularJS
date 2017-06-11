/**
 * Created by xiaoxiao on 2017/6/11.
 */
var userInforModel =angular.module('userInforModel',[]);

userInforModel.controller('userInforCtrl',['$scope',function ($scope) {
    $scope.userinfo={
        email:'123456@qq.com',
        password:'123456',
        autoLogin:true
    };



    $scope.getFormData=function () {
        console.log($scope.userinfo);
    };
    $scope.setFormData=function () {
        $scope.userinfo={
            email:'qqqqqqqq@qq.com',
            password:'56372829',
            autoLogin:true
        }
    };

    //form中的值又变成了之前的样子
    $scope.resetFormData=function () {
        $scope.userinfo={
            email:'123456@qq.com',
            password:'123456',
            autoLogin:true
        };
    }




}])