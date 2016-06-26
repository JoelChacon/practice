
angular.module('app').controller('mainCtrl', function($scope, $timeout, myFactory){

	$scope.name = "ummmm";
	$timeout(function() {
    	$scope.name = "hold on I'm thinking";
    }, 4500);
	$timeout(function() {
    	$scope.name = "hold on I'm thinking.";
    }, 5000);
	$timeout(function() {
    	$scope.name = "hold on I'm thinking..";
    }, 6000);
	$timeout(function() {
    	$scope.name = "hold on I'm thinking...";
    }, 7000); 
	$timeout(function() {
    	$scope.name = "hold on I'm thinking....";
    }, 8000);
	$timeout(function() {
    	$scope.name = "hold on I'm thinking.....";
    }, 9000);
	$timeout(function() {
	 	$scope.name = "Oh Yeah It's ;)"
	}, 10000)
	$timeout(function() {
	 	$scope.name = "Joel Chacon"
	}, 11000)
	$scope.mijo = " Joel Anjel Chacon";
	$scope.car = myFactory.getCar();
	//mijo's info
	$scope.mijosInfo = myFactory.getMijosInfo();
	$scope.fighter = myFactory.getFighter();
	//ng-click
	 //This will hide the DIV by default.
	$scope.visible = true;
	$scope.showAndHide = function() {
		
		//If DIV is visible it will be hidden and vice versa.
		 $scope.visible = $scope.visible ? false : true;
	}
	//practice for the $q library
	// function add(x, y, callback) { // step 1. the function is created by me
	// 	callback(x + y);
	// }
	// add(34, 3234, function(joel) {
	// 	$scope.result = joel;
	// })

	function subtract(e, i, callback) {
		callback(e * i);
	}
	subtract(23, 98, function(theResult) {
		$scope.anjel = theResult;
	})
    $scope.hi = myFactory.sayHello("World");
    $scope.bye = myFactory.sayGoodbye("World");

    
});
 // encapsulation
 // functional programming
 // object oriented programming
	