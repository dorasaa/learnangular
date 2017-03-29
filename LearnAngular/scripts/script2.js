///<reference path="angular.js"/>
//This example is method chaining where module and controller are mentioned in one statement
var myapp = angular
                .module("mymodule", [])
.controller("mycontroller", function ($scope) {
    var employee = { fname: "satish", lname: "doranahalli", profession: "Software Enginer", gender: "M", age: 36 }

    $scope.employee = employee;
});
  