/**
 * Simple exampel of an angular controller. Notice that it lives off
 * of the controllers module, which was included in the applicaiton module.
 */
angular.module('controllers').controller('CryptoController', ['$scope', 'CryptoService', '$window', '$timeout', function ($scope, CryptoService, $window, $timeout) {

    /**
     * Example of accessing data through and included service.
     */
    $scope.reload = reload;

    $scope.reload();

    function reload () {
        CryptoService.eth().then(function (data) {
            $scope.eth = data;
            console.log('eth', data);
        }).catch(function (reason) {
            $window.alert(reason);
        });

        CryptoService.btc().then(function (data) {
            $scope.btc = data;
            console.log('btc', data);
        }).catch(function (reason) {
            $window.alert(reason);
        });

        $timeout(function () {
            $scope.reload();
        }, 3000);
    }

}]);