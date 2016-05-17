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
		.state('practice', {
			url: '/practice',
			templateUrl: "html/practice.html",
			controller: 'mainCtrl'
		})
		.state('ng-click', {
			url: '/ngClick',
			templateUrl: 'html/ngClick.html',
			controller: 'mainCtrl'
		})
		.state('contact', {
			url: '/contact',
			templateUrl: 'html/contact.html',
			controller: 'mainCtrl'
		})
})