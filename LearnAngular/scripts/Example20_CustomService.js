///<reference path="angular.js" />
var myapp = angular
            .module("mymodule", [])
    .controller("mycontroller", function($scope,$log) {

        $scope.transformString = function (input) {
            $log.info("input " + input);
            if (!input)
            {
            
                return input;

            }


            

            for (var i = 0; i < input.length; i++)
            {
                var output1 = "";
                $log.info("i " + i);
                $log.info("input["+i+"] " + input[i]);
                    if (i > 0 && input[i] == input[i].toUpperCase())
                    {
                         
                        output1 = output1 + " ";
                        $log.info("output1 " + output1);
                    }
                    if (i != 0) { output1 = output1 + output1[i]; }
                    
            }
            $scope.output = output1;
            
            }
        
        });