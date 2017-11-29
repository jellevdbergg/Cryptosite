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
        if (!localStorage.getItem("login")) {
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
        $scope.eth_data = CryptoService.eth_short();

        CryptoService.eth_1m().then(function (data) {
            $scope.eth_1m = data.data;
            $scope.eth_1m.name = '1m';
            $scope.eth_1m.order = 9;
            $scope.eth_data.push($scope.eth_1m);
        });


        $scope.eth_array = objToArray($scope.eth_data);
        console.log('eth long', $scope.eth_array);

        $timeout(function () {
            $scope.getEthHistory();
        }, 360000);
    }

    function getBtcHistory() {
        $scope.btc_data = CryptoService.btc_short();

        CryptoService.btc_1m().then(function (data) {
            $scope.btc_1m = data.data;
            $scope.btc_1m.name = '1m';
            $scope.btc_1m.order = 9;
            $scope.btc_data.push($scope.btc_1m);
        });

        $scope.btc_array = objToArray($scope.btc_data);
        $timeout(function () {
            $scope.getBtcHistory();
        }, 360000);
    }

    function objToArray(obj) {
        var output = [];
        for (var item in obj) {
            console.log('item in obj', item);
            output.push(item);
        }
        return output;
    }

}]);