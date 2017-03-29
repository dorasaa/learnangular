///<reference path="angular.js"/>

var myapp = angular
                .module("mymodule", [])
                .controller("mycontroller", function ($scope) {
 
                    var technologies = [
                        { name: "C#", likes: 0, dislikes: 0 },
                        { name: "Angular", likes: 0, dislikes: 0 },
                        { name: "Vb.net", likes: 0, dislikes: 0 },
                        { name: "Javascript", likes: 0, dislikes: 0 }

                    ]
                    $scope.technologies = technologies;
                     
                    $scope.incrementlikes = function (tech) { tech.likes++; }
                    $scope.incrementdislikes = function (tech) { tech.dislikes++; }
                });
