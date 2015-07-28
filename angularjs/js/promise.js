var app = angular.module("myApp", []);

app.service("githubService", function($http, $q) {

  var deferred = $q.defer();

  this.getAccount = function() {
    return $http.get('https://api.github.com/users/danmbugua')
      .then(function(response) {
        deferred.resolve(response.data);
        return deferred.promise;
      }, function(response) {
        deferred.reject(response);
        return deferred.promise;
      });
  };
});

app.controller("promiseController", function($scope, $q, githubService) {

  githubService.getAccount()
    .then(
      function(result) {
        $scope.account = result;
      },
      function(error) {
        console.log(error.statusText);
      }
    );
});