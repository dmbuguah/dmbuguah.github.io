var app = angular.module('DataBinding', [])
 app.controller('BindController',  function($scope,$timeout){

    var updateClock = function(){
        $scope.clock={};
        $scope.clock.now = new Date();
        $timeout(function(){
        updateClock();
        }, 1000);
    };
    updateClock();
 });