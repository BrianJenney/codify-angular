angular.module('myApp')

.controller('HomeCtrl', ['$scope', '$http', function($scope, $http) {

  $scope.welcomeMessage = "Welcome to my page";

}]);
