/// <reference path="angular.js" />
/// <reference path="angular-route-min.js" />

 
var app = angular
    
                .module("Demo", ["ngRoute"])
                .config(function ($routeProvider,$locationProvider) {
                    $routeProvider
                     .when("/home", {
                        templateUrl: "Templates/home.html",
                        controller: "homeController"
                        })
                    .when("/courses", {
                        templateUrl: "Templates/courses.html",
                        controller: "coursesController"
                    })
                    .when("/students", {
                        templateUrl: "Templates/students.html",
                        controller: "studentsController"
                    })
                    .otherwise({
                        redirectTo: "/",
                        templateUrl: "Templates/page404.html",
                        controller: function ($scope) { $scope.message = "Page not found"; }
                    })
                     
                    $locationProvider.html5Mode(true);
                })

            .controller("homeController", function ($scope) {
                $scope.message = "Home page";
                })
             .controller("coursesController", function ($scope) {
                 $scope.courses = ["c#","vb.net"];
             })
             .controller("studentsController", function ($scope,$http) {
                 $http.get("students.asmx/GetStudents")
                 .then(function(response)                  { 
                     $scope.students = response.data;
                 
                 })
            })

    