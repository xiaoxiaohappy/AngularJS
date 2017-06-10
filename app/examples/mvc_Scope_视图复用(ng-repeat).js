function GreetCtrl($scope, $rootScope) {
	$scope.name = 'World';
	$rootScope.department = 'Angular';//	$rootScope是根作用域
}

function ListCtrl($scope) {
	$scope.names = ['Igor', 'Misko', 'Vojta'];
}
