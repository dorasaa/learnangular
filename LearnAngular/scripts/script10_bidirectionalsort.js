///<reference path="angular.js"/>

var myapp = angular
                .module("mymodule", [])
                .controller("mycontroller", function ($scope) {

                    var employees = [
                        { name: "Prasad", dob: "05/12/1984", gender: "M", salary: 560000.039988 },
                        { name: "satish", dob: "12/05/1983", gender: "M", salary: 350000.83789 },
                        { name: "Matthew", dob: "17/01/1990", gender: "M", salary: 980000.877777 },
                        { name: "dan", dob: "08/08/2001", gender: "M", salary: 220000.627888 },
                         { name: "dan2", dob: "11/08/1990", gender: "M", salary: 560000.039988 },
                        { name: "ravi", dob: "01/08/1979", gender: "M", salary: 350000.83789 },
                        { name: "Chris", dob: "23/02/1976", gender: "M", salary: 980000.877777 },
                        { name: "Hiren", dob: "29/02/1976", gender: "M", salary: 220000.627888 }
                    ]
                    $scope.employees = employees;
                    $scope.rowlimit = 3;
                    $scope.sortcolumnn = "name";
                    $scope.reversesort = false;

                });
