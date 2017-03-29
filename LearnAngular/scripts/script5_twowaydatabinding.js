///<reference path="angular.js"/>

var myapp = angular
                .module("mymodule", [])
                .controller("mycontroller", function ($scope) {
                    var employee = { fname: "satish", lname: "dor", gender: "M" }
                    $scope.employee = employee;
                });
