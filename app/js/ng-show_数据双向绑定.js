/**
 * Created by xiaoxiao on 2017/6/11.
 */
var ngshowModel = angular.module('ngshowModel', []);
ngshowModel.controller('ngshowMenuCtrl', ['$scope',
    function($scope) {
        $scope.menuState={show:false};
        $scope.toggleMenu = function() {
            $scope.menuState.show = !$scope.menuState.show;
        };
    }
])
