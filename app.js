var app = angular.module('app', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/')
	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'html/home.html',
			controller: 'mainCtrl'
		})
		.state('mijo', {
			url: '/mijo',
			templateUrl: "html/mijo.html",
			controller: 'mainCtrl'
		})
})