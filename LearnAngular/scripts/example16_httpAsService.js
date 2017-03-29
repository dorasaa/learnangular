///<reference path="angular.js"/>
var myapp = angular
                .module("myapp", [])
                  .controller("mycontroller", function ($scope, $http) {

                      $http({
                          method: 'GET',
                          url: 'employeeservice.asmx/GetAllEmployees'
                      })
                        .then(function (response) {

                            $scope.employees = response.data;
                        });

                  });
