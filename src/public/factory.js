angular.module('app').factory('myFactory', function() {
	
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
				speech: 'googoos & gagas that are the \n most beautiful sound I\'ve ever heard'
			};
		},
		 
        age: 20 ,
  		getSexualPreference: function() {
        	return this.sexualPreference;
        }, 
        sayHello: function(text){
            return "Factory says \"Hello " + text + "\"";
        },
        sayGoodbye: function(text){
            return "Factory says \"Goodbye " + text + "\"";
        }
	};

})