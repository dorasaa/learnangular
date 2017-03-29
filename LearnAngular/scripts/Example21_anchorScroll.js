///<reference path="angular.js" />
var demoapp = angular
            .module("demoapp", [])
            .controller("democontroller", function ($scope, $location,$anchorScroll) {
                $scope.scrollTo = function (scrollLocation) {
                    $location.hash(scrollLocation);
                    $anchorScroll();
                }
                 

    });