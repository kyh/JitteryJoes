'use strict';

// Declare app level module which depends on filters, and services
angular.module('jitteryApp', [
  'ngRoute',
  'jitteryApp.filters',
  'jitteryApp.services',
  'jitteryApp.directives',
  'jitteryApp.controllers',
  'ngAnimate'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Blends', {templateUrl: 'partials/Blends.html', controller: 'ReviewListCtrl'});
  $routeProvider.when('/Stories', {templateUrl: 'partials/Stories.html', controller: 'ReviewListCtrl'});
  $routeProvider.otherwise({redirectTo: '/Blends'});
}])

.run(function($rootScope, $location, $http) {
	// Here be global functions and variables
	$rootScope.$on('$routeChangeSuccess', function () {
		$rootScope.myPage = $location.path().substring($location.path().indexOf('/', 1)).replace("/","");
	});
});