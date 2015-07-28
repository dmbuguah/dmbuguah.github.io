var myapp = angular.module('ScopeHierachy',[])

    myapp.controller('ParentController', function($scope){
       $scope.person = {
         greeted : true,
       };

    });

    myapp.controller('ChildController',function($scope){
        $scope.sayHello = function(){
            $scope.person.name = "Daniel Mbugua";
        }

    });