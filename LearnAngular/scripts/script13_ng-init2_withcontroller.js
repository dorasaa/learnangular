///<reference path="angular.js"/>
var app = angular
                .module("mymodule", [])
                .controller("mycontroller", function ($scope) {

                   var countries = [
                        { name: 'India', cities:[
                                            {name: 'bangalore'}, 
                                            {name:'Chennai'}
                        ]
                        },
                        {
                            name: 'USA', cities: [
                                              { name: 'San fransisco' },
                                              { name: 'san roman' }
                            ]
                        }
                         
                    ];
                   $scope.countries = countries;

                });
