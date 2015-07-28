var app = angular.module('xhrWorking',[]);
        app.factory('xhrService',function($http){

            return{
                getUsers :function(){
                    return $http({
                        method : 'GET',
                        url    : 'https://api.github.com/users'
                    });

                }
        };
    });

    app.controller("xhrAction",["$scope","$http","xhrService",function($scope,$http,xhrService){
      xhrService.getUsers()
        .success(function(results){
                        $scope.users = results;
                    });
}]);


