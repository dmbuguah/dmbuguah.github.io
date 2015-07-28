angular.module('appDirective',[])

.run(function($rootScope){

    $rootScope.rootProperty="Hi,Im the root scope";
})

.controller("ParentController",function($scope){
   $scope.parentProperty ="Hi,Im the parent scope";
})

.controller("ChildController",function($scope){
   $scope.childProperty = "Hi,im the child scope";

   $scope.fullSentenceFromCild = 'Same $scope:We can access: '+
   $scope.rootProperty + 'and'+ $scope.parentProperty + 'and'+ $scope.childProperty;
})

.directive('myDirective',function(){
    return{
        restrict : 'A',
        replace: true,
        scope:{
            myUrl:'=someAttr',
            myLink: '@'
        },
        template : '<div><label>My Url Field:</label><input type="text" ng-model="myUrl"/><a href="{{myUrl}}">{{myLink}}</a></div>'
    };

});