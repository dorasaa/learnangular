///<reference path="angular.js"/>
var myapp = angular
                .module("myapp", [])
                  .controller("mycontroller", function ($scope, $http, $log) {

                      /*Method 1*/
                      /* 
                      $http({
                          method: 'GET',
                          url: 'employeeservice.asmx/GetAllEmployees1'
                      })
                        .then(function (response) {

                            $scope.employees = response.data;
                            $log.info(response);
                        }, function (reason) {
                            $scope.error = reason.data;
                            $log.info(reason.data);
                        });
                      */

                      /*Method 2 - ErrorCallback and SuccessCallback methods*/

                      var successCallback = function (response) { $scope.employees = response.data; };
                      var errorCallback = function (reason) { $scope.error = reason.data; };

                      $http(

                          {
                              method: 'GET',
                              url: 'employeeservice.asmx/GetAllEmployees'

                          })
                      .then(successCallback, errorCallback);
                  });
