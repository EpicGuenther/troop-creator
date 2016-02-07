'use strict';

// Controller to build the examplelist and the top Navigation
angular.module('navModule', [])
    .directive('navD', function () {
            return {
                templateUrl: 'nav.html',
                replace: true,
                controller: 'navCtrl'
            };
        }
    ).controller('navCtrl', ['$scope', '$rootScope', '$http', '$timeout', '$location',
    function ($scope, $rootScope, $http, $timeout, $location) {
        // Add the examples array to the scope to use it in the Template wit ng-repeat
        $http.get('./data/nav.json').
        success(function (data, status, headers, config) {
                $scope.armys = data;
            }
        ).
        error(function (data, status, headers, config) {
            alert('error reading navigation');
        });

        $scope.menuActive = false;
        $scope.menuToggle = function () {
            if ( $('#navi-icon').is(':visible') ) {
                $scope.menuActive = !$scope.menuActive;
                if ($scope.menuActive) {
                    $('#top-menu').slideDown();
                } else {
                    $('#top-menu').slideUp();
                }
            }
        }
    }]
);
