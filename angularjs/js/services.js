var app = angular.module('myApp',[])
         app.factory('githubService', function($http) {

             var githubUrl = 'https://api.github.com';

                 var runUserRequest = function(username, path) {

                     return $http({

                     method: 'JSONP',

                     url: githubUrl + '/users/' +

                     username + '/' +

                     path + '?callback=JSON_CALLBACK'

                 });

             }
         return {

         events: function(username) {

          return runUserRequest(username, 'events');

         }

     };
 });

 app.controller('ServiceController',

     function($scope, githubService) {

         $scope.$watch('username', function(newUsername) {

             githubService.events(newUsername)

             .success(function(data, status, headers) {

             $scope.events = data.data;

         })

     });

 });
