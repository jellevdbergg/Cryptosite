/**
 * Simple exampel of an angular controller. Notice that it lives off
 * of the controllers module, which was included in the applicaiton module.
 */

angular.module('controllers').controller('HomeController', ['$scope', 'CryptoService', '$timeout', '$location', function ($scope, CryptoService, $timeout, $location) {
    $scope.reload = reload;
    $scope.getEthHistory = getEthHistory;
    $scope.getBtcHistory = getBtcHistory;

    init();

    function init() {
        if (!localStorage.getItem("login")){
            $location.path("/");
        }

        $scope.$broadcast('toggle-partial');

        $scope.reload();
        $scope.getBtcHistory();
        $scope.getEthHistory();
    }

    function reload() {
        var oldEthAmount = $scope.eth ? $scope.eth.amount : null;
        var oldBTCAmount = $scope.btc ? $scope.btc.amount : null;
        CryptoService.eth().then(function (data) {
            $scope.eth = data.data;

            if (oldEthAmount !== null && data.data.amount > oldEthAmount) {
                $scope.eth.up = true;
            }
            else if (oldEthAmount !== null && data.data.amount < oldEthAmount) {
                $scope.eth.up = false;
            }
        });

        CryptoService.btc().then(function (data) {
            $scope.btc = data.data;
            if (oldBTCAmount !== null && data.data.amount > oldBTCAmount) {
                $scope.btc.up = true;
            }
            else if (oldBTCAmount !== null && data.data.amount < oldBTCAmount) {
                $scope.btc.up = false;
            }
        });

        $timeout(function () {
            $scope.reload();
        }, 15000);
    }

    function getEthHistory() {
        CryptoService.eth_1m().then(function (data) {
            $scope.eth_1m = data.data;
        });

        CryptoService.eth_24h().then(function (data) {
            $scope.eth_24h = data.data;
        });

        CryptoService.eth_7d().then(function (data) {
            $scope.eth_7d = data.data;
        });
        $timeout(function () {
            $scope.getEthHistory();
        }, 1800000);
    }

    function getBtcHistory() {
        CryptoService.btc_1m().then(function (data) {
            $scope.btc_1m = data.data;
        });

        CryptoService.btc_24h().then(function (data) {
            $scope.btc_24h = data.data;
        });

        CryptoService.btc_7d().then(function (data) {
            $scope.btc_7d = data.data;
        });
        $timeout(function () {
            $scope.getBtcHistory();
        }, 1800000);
    }

}]);