angular.module('app').directive('headerDir', function(){
    return{
        restrict: "E",
        templateUrl: "/app/directives/header/headerTmpl.html",
        controller: 'headerCtrl'
    }
})
