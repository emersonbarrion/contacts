angular.module("ContactsApp",["ngRoute", "ngResource"])
    .config(["$routeProvider" ,"$locationProvider" ,function($routeProvider, $locationProvider){
       $routeProvider
           .when('/contacts',{
            controller: "ListController",
            templateUrl: 'views/list.html'
            });
        $locationProvider.html5Mode(true);
    }]);