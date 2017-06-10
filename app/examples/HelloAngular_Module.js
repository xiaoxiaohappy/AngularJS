var myModule = angular.module("HelloAngular", []);

myModule.controller("helloAngular", ['$scope', //helloAngular是控制器
    function HelloAngular($scope) {
        $scope.greeting = {
            text: 'Hello'
        };
    }
]);

