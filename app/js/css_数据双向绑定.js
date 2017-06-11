/**
 * Created by xiaoxiao on 2017/6/11.
 */
var cssModel=angular.module('cssModel',[]);
cssModel.controller('cssCtrl',['$scope',function ($scope) {
    $scope.color="red";
    $scope.setGreen=function () {
        $scope.color="green";
    }
}])