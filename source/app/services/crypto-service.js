/**
 * A simple example service that create a factory (UsersService)
 * off of the services module.
 */
angular.module('services').factory('CryptoService', ['$http', '$q', function ($http, $q) {

    return {

        btc: function () {

            var deferred = $q.defer();

            $http.get('https://api.coinbase.com/v2/prices/BTC-EUR/spot').success(function (data) {

                deferred.resolve(data);

            }).error(function () {

                deferred.reject("not found");
            });

            return deferred.promise;
        },

        eth: function () {
            var deferred = $q.defer();
            $http.get('https://api.coinbase.com/v2/prices/ETH-EUR/spot').success(function (data) {

                deferred.resolve(data);

            }).error(function () {

                deferred.reject("not found");
            });

            return deferred.promise;
        },
         eth_1m: function () {
            var deferred = $q.defer();
            var curr = new Date(); // get current date
            var last = (curr.getDate() - curr.getMonth()) - 1;
            var date = formatDate(new Date(curr.setDate(last)));
            console.log('date', date);
            $http.get('https://api.coinbase.com/v2/prices/ETH-EUR/spot', {params: {'date': date}}).success(function (data) {

                deferred.resolve(data);

            }).error(function () {

                deferred.reject("not found");
            });
            return deferred.promise;
        },
        eth_24h: function () {
            var deferred = $q.defer();
            var curr = new Date(); // get current date
            var last = (curr.getDate() - curr.getDay()) - 1; // First day is the day of the month - the day of the week
            var date = formatDate(new Date(curr.setDate(last)));
            $http.get('https://api.coinbase.com/v2/prices/ETH-EUR/spot', {params: {'date': date}}).success(function (data) {

                deferred.resolve(data);

            }).error(function () {

                deferred.reject("not found");
            });
            return deferred.promise;
        },
        eth_7d: function () {
            var deferred = $q.defer();
            var curr = new Date(); // get current date
            var last = (curr.getDate() - curr.getDay()) - 7; // First day is the day of the month - the day of the week
            var date = formatDate(new Date(curr.setDate(last)));
            $http.get('https://api.coinbase.com/v2/prices/ETH-EUR/spot', {params: {'date': date}}).success(function (data) {

                deferred.resolve(data);

            }).error(function () {

                deferred.reject("not found");
            });
            return deferred.promise;
        },
        btc_1m: function () {
            var deferred = $q.defer();
            var curr = new Date(); // get current date
            var last = (curr.getDate() - curr.getMonth()) - 1;
            var date = formatDate(new Date(curr.setDate(last)));
            console.log('date', date);
            $http.get('https://api.coinbase.com/v2/prices/BTC-EUR/spot', {params: {'date': date}}).success(function (data) {

                deferred.resolve(data);

            }).error(function () {

                deferred.reject("not found");
            });
            return deferred.promise;
        },
        btc_24h: function () {
            var deferred = $q.defer();
            var curr = new Date(); // get current date
            var last = (curr.getDate() - curr.getDay()) - 1; // First day is the day of the month - the day of the week
            var date = formatDate(new Date(curr.setDate(last)));
            $http.get('https://api.coinbase.com/v2/prices/BTC-EUR/spot', {params: {'date': date}}).success(function (data) {

                deferred.resolve(data);

            }).error(function () {

                deferred.reject("not found");
            });
            return deferred.promise;
        },
        btc_7d: function () {
            var deferred = $q.defer();
            var curr = new Date(); // get current date
            var last = (curr.getDate() - curr.getDay()) - 7; // First day is the day of the month - the day of the week
            var date = formatDate(new Date(curr.setDate(last)));
            $http.get('https://api.coinbase.com/v2/prices/BTC-EUR/spot', {params: {'date': date}}).success(function (data) {

                deferred.resolve(data);

            }).error(function () {

                deferred.reject("not found");
            });
            return deferred.promise;
        }

    };

    function formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2) {
            month = '0' + month;
        }
        if (day.length < 2) {
            day = '0' + day;
        }

        return [year, month, day].join('-');
    }

}]);