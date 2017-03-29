///<reference path="angular.js"/>
var myapp = angular
                .module("myapp", [])
                  .controller("mycontroller", function ($scope,$http) {
                 
                      $http.get('employeeservice.asmx/GetAllEmployees')
                        .then(function (response) {

                          $scope.employees = response.data;
                      });
                   
                  });
    