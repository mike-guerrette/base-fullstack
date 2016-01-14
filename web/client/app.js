(function() {
    'use strict';

    angular.module('app', ['ui.router']);

    angular.module('app').controller('AppCtrl', ['$scope',
        function($scope) {
            $scope.message = 'Hello!';
        }
    ]);
})();