angular.module('myFilter',[])

.controller('myFilterController',[function($scope){
    return function(input){
        if(input){
            return input[0].toUpperCase + input.slice(1);
        }
    };

}]);