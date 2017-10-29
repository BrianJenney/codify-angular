
// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute'
]).

//use route provider to return certain templates when a user requests
//a page
config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/home', {
	    templateUrl: 'views/home.html', //this is the page we will return
	    controller: 'HomeCtrl' //this is the controller we will use
	  })
    .when('/pageOne', {
  	    templateUrl: 'views/pageOne.html', //this is the page we will return
  	    controller: 'PageOneCtrl' //this is the controller we will use
  	  })
    .when('/pageTwo', {
    	    templateUrl: 'views/pageTwo.html', //this is the page we will return
    	    controller: 'PageTwoCtrl' //this is the controller we will use
    	  })
  	.otherwise({redirectTo: '/home'
	});
}]);
