angular.module('app').factory('myFactory', function() {
	var dreamCar = 'Le Ferrari';
	var service = {};

	service.getCar = function() {
		return dreamCar;
	};
	service.getMijosInfo = function() {
		return {
			age: "Age: 2 small years",
			smells: "Smell: Delicious",
			social: "Social: Gets along with everybody",
			favFood: "Favorite Food: Peanut Butter & Jelly",
			favToy: "Favorite Toy: Everything"
		};
	};

	return service;
})