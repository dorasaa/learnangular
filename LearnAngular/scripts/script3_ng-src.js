///<reference path="angular.js"/>

var myapp = angular
                .module("mymodule", [])
                .controller("mycontroller", function ($scope) {
                        var country = { name: "india", capital: "delhi", flag: "/images/india-flag.png"}
            $scope.country= country;
});
