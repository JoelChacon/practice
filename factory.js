angular.module('app').factory('myFactory', function() {
	var dreamCar = 'Le Ferrari';
	var service = {};

	service.getCar = function() {
		return dreamCar;
	}

	return service;
})