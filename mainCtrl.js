angular.module('app').controller('mainCtrl', function($scope, myFactory){

	$scope.name = "Joel Chacon";
	$scope.mijo = "Joel Anjel Chacon";
	$scope.car = myFactory.getCar();
	$scope.mijosInfo = myFactory.getMijosInfo();

});