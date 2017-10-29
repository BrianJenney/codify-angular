
//this is where we declare our app
//those brackets are where we can inject dependencies
//like a library or another modular piece of code from our app
var app = angular.module('myApp', []);

//the controller defines your logic
//for this controller we are using $scope to bind our variables to the html
//$http to create http requests
//and $timeout in case we want to use angular's setTimeOut function
app.controller('myCtrl', function($scope, $http, $timeout){

	$http.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=eggs&api-key=fbb07d1a4e4f6f90c4509b27c2bc6938:9:73594931').then(function(data){

		console.log(data);

	});

})
