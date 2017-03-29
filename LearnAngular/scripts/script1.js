/// <reference path="angular.js"

var myapp = angular.module("mymodule", []);

myapp.controller("mycontroller", function ($scope) {

    $scope.message = "Welcome to angular learning";
});
