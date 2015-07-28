angular.module("myApp",[])
.config("$routeProvider",function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl:'tpls/home.tpl.html',
            controller: 'homeController'
        })
        .when('login',{
            templateUrl : 'tpls/login.tpl.html',
            controller:  'loginController',

            resolve :{
                user : function(SessionService){
                    return SessionService.getCurrentUser();
                }
            }
        })
        .otherwise({
            redirectTo : '/'
        });
});