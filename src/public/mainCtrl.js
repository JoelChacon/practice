angular.module('app').controller('mainCtrl', function($scope, myFactory){

	$scope.name = "Joel Chacon";
	$scope.mijo = "Joel Anjel Chacon";
	$scope.car = myFactory.getCar();
	//mijo's info
	$scope.mijosInfo = myFactory.getMijosInfo();
	//ng-click
	 //This will hide the DIV by default.
	$scope.visible = true;
	$scope.showAndHide = function() {
		//If DIV is visible it will be hidden and vice versa.
		return $scope.visible = $scope.visible ? false : true;
	};
	//practice for the $q library
	function add(x, y) {
		return(x + y);
	};
	$scope.result = add(5, 8);

});