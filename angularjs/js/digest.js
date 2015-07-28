angular.module("myApp",[])
    .controller("myController",function($scope){


    function WatchCtrl ($scope) {
    var watch = this;
    function isLongEnough (pwd) {
        return pwd.length > 4;
    }

    function hasNumbers (pwd) {
        return /[0-9]/.test(pwd);

    }

    $scope.$watch('watch.user.password', function (newVal, oldVal) {
        if (!newVal) return;

        watch.reqs = [];

        if (!isLongEnough(newVal)) {
            watch.reqs.push('Too short');
        }

        if (!hasNumbers(newVal)) {
            watch.reqs.push('Must include numbers');
        }

        watch.showReqs = watch.reqs.length;
    });
    }
});