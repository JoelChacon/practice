angular.module('app').factory('myFactory', function($http) {
	
	return {
		dreamCar:'Le Ferrari',
		getCar: function() {
			return this.dreamCar;
		},
		getMijosInfo: function() {
			return {
				age: "Age: 2 small years",
				smells: "Smell: Delicious",
				social: "Social: Gets along with everybody",
				favFood: "Favorite Food: Peanut Butter & Jelly",
				favToy: "Favorite Toy: Everything",
				speech: 'googoos & gagas that are the most beautiful sound I have ever heard'
			};
		},
		getFighter: function() {
			return {
				favFighter: "Anderson Silva"
			}
		},
		 
        age: 20 ,
        sayHello: function(text){
            return "Factory says \"Hello " + text + "\"";
        },
        sayGoodbye: function(text){
            return "Factory says \"Goodbye " + text + "\"";
        }
        // $http.get('/api')
        // 	 .success(function (result) {
        // 	 	$scope.rules = result;
        // 	 })
        // 	 .error(function (data, status) {
        // 	 	console.log(data);
        // 	 });
	};

})