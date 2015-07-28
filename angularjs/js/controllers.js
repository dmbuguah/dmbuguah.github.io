var myApp = angular.module('Calculate',[])

myApp.controller('CalController',function($scope){
    $scope.count = 0;
    $scope.add  = function(val){
        $scope.count += val;
    };

    $scope.subtract = function(val){
        $scope.count -= val;
    };

    $scope.person = {
          name : 'Daniel',
    };


});