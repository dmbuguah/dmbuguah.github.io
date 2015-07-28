var myapp = angular.module('Parsing',[])

myapp.controller('ParseController',['$scope','$parse',function($scope,$parse) {
    $scope.person = {
        name:"Daniel mbugua",
    }

    $scope.$watch('expr',function(newVal, oldVal, scope){
      if (newVal !== oldVal) {
        var parseFun = $parse(newVal);

        $scope.parsedValue = parseFun(scope);
      }
    });



}]);