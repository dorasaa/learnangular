///<reference path="angular.js"/>

var myapp = angular
                .module("mymodule", [])
                .controller("mycontroller", function ($scope) {
                    var employees = [
                    { fname: "satish", lname: "dor", gender: "M", salary: 60000 },
                    { fname: "prasad", lname: "chand", gender: "M", salary: 80000},
                    { fname: "Matt", lname: "Barnett", gender: "M", salary: 90000 },
                    { fname: "Pra", lname: "Gowder", gender: "F", salary: 40000 }
                    ];

                    var countries = [
                                {
                                    name: "England", cities: [
                                                                  { name: "Manchester" },
                                                                  { name: "Birmingham" },
                                                                  { name: "London" },
                                    ]
                                },
                                {
                                    name: "Wales", cities: [
                                                                  { name: "Cardiff" },
                                                                  { name: "Swansea" },
                                                                  { name: "south wales" },
                                    ]
                                },
                                {
                                    name: "Scotland", cities: [
                                                                  { name: "Edinburgh" },
                                                                  { name: "Aberdeen" },
                                                                  { name: "Glasgow" },
                                    ]
                                }
                    ];

                    $scope.countries = countries;
                   // $scope.employees = employees;
                });
