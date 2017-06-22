/**
 * Created by YXX on 2017/6/21.
 */
function myCtrl($scope) {
    $scope.master={};

    $scope.update=function (user) {
        $scope.master=angular.copy(user)
    }

    $scope.reset=function () {
        $scope.user=angular.copy($scope.master)
    }

    $scope.isUnchanged=function (user) {
        return angular.equals(user,$scope.master)
    }

    $scope.reset()
}

