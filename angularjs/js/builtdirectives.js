var myapp = angular.module("myApp",[]);

myapp.controller("myController",["$scope","$timeout",function($scope,$timeout){
    $scope.isDisabled = true;
    $timeout(function() {
        $scope.isDisabled = false;

    }, 10000);

}]);