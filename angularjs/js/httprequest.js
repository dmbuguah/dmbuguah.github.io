var app = angular.module('myApp',[]);
        app.factory('getData',function($http){

            return{
                employee :function(){
                    return $http({
                        method : 'GET',
                        url    : 'json/data.json'
                    });

                }
        };
    });

    app.controller("myController",["$scope","$http","getData",function($scope,$http,getData){
      getData.employee()
        .success(function(results){
                        $scope.employees = results;
                    });
}]);


