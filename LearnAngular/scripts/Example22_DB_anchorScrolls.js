///<reference path="angular.js"/>
var myapp = angular
                .module("myapp", [])
                  .controller("countrycontroller", function ($scope, $http,$location,$anchorScroll) {

                      $http({
                          method: 'GET',
                          url: 'CountryCityList.asmx/GetCountriesAndCities'
                      })
                        .then(function (response) {

                            $scope.countries = response.data;
                        });

                      $scope.scrollTo = function (countryname) {
                          $location.hash(countryname);
                          $anchorScroll();
                      }
                  }); //controller function
