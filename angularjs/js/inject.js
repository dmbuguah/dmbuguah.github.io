var myApp1 = angular.module('myApp',[]);
myApp1.factory('myFactory',function(){
     return{
        message:function(msg){
            alert(msg);
        }
     }
})
myApp1.controller('myController',['$scope','myFactory',function($scope,myFactory){
    $scope.clickMe = function(){
       myFactory.message("Hello");
    };

}]);