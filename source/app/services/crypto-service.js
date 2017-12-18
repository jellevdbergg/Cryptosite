/**
 * A simple example service that create a factory (UsersService)
 * off of the services module.
 */
angular.module('services').factory('CryptoService', ['$http', '$q', function ($http, $q) {
var cc = 'https://min-api.cryptocompare.com/data/';
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

        xrp: function () {
            var deferred = $q.defer();
            $http.get(cc + 'price', {params: {fsym: 'XRP', tsyms: 'EUR'}}).success(function (data) {

                deferred.resolve(data);

            }).error(function () {

                deferred.reject("not found");
            });

            return deferred.promise;
        },

        iota: function () {
            var deferred = $q.defer();
            $http.get(cc + 'price', {params: {fsym: 'IOTA', tsyms: 'EUR'}}).success(function (data) {

                deferred.resolve(data);

            }).error(function () {

                deferred.reject("not found");
            });

            return deferred.promise;
        },
        //  eth_1m: function () {
        //     var deferred = $q.defer();
        //     var curr = new Date(); // get current date
        //     var last = (curr.getDate() - curr.getMonth()) - 1;
        //     var date = formatDate(new Date(curr.setDate(last)));
        //     console.log('date', date);
        //     $http.get('https://api.coinbase.com/v2/prices/ETH-EUR/spot', {params: {'date': date}}).success(function (data) {
        //
        //         deferred.resolve(data);
        //
        //     }).error(function () {
        //
        //         deferred.reject("not found");
        //     });
        //     return deferred.promise;
        // },
        // eth_24h: function () {
        //     var deferred = $q.defer();
        //     var curr = new Date(); // get current date
        //     var last = (curr.getDate() - curr.getDay()) - 1; // First day is the day of the month - the day of the week
        //     var date = formatDate(new Date(curr.setDate(last)));
        //     $http.get('https://api.coinbase.com/v2/prices/ETH-EUR/spot', {params: {'date': date}}).success(function (data) {
        //
        //         deferred.resolve(data);
        //
        //     }).error(function () {
        //
        //         deferred.reject("not found");
        //     });
        //     return deferred.promise;
        // },
        // eth_7d: function () {
        //     var deferred = $q.defer();
        //     var curr = new Date(); // get current date
        //     var last = (curr.getDate() - curr.getDay()) - 7; // First day is the day of the month - the day of the week
        //     var date = formatDate(new Date(curr.setDate(last)));
        //     $http.get('https://api.coinbase.com/v2/prices/ETH-EUR/spot', {params: {'date': date}}).success(function (data) {
        //
        //         deferred.resolve(data);
        //
        //     }).error(function () {
        //
        //         deferred.reject("not found");
        //     });
        //     return deferred.promise;
        // },
        // btc_1m: function () {
        //     var deferred = $q.defer();
        //     var curr = new Date(); // get current date
        //     var last = (curr.getDate() - curr.getMonth()) - 1;
        //     var date = formatDate(new Date(curr.setDate(last)));
        //     console.log('date', date);
        //     $http.get('https://api.coinbase.com/v2/prices/BTC-EUR/spot', {params: {'date': date}}).success(function (data) {
        //
        //         deferred.resolve(data);
        //
        //     }).error(function () {
        //
        //         deferred.reject("not found");
        //     });
        //     return deferred.promise;
        // },
        // btc_24h: function () {
        //     var deferred = $q.defer();
        //     var curr = new Date(); // get current date
        //     var last = (curr.getDate() - curr.getDay()) - 1; // First day is the day of the month - the day of the week
        //     var date = formatDate(new Date(curr.setDate(last)));
        //     $http.get('https://api.coinbase.com/v2/prices/BTC-EUR/spot', {params: {'date': date}}).success(function (data) {
        //
        //         deferred.resolve(data);
        //
        //     }).error(function () {
        //
        //         deferred.reject("not found");
        //     });
        //     return deferred.promise;
        // },
        // btc_7d: function () {
        //     var deferred = $q.defer();
        //     var curr = new Date(); // get current date
        //     var last = (curr.getDate() - curr.getDay()) - 7; // First day is the day of the month - the day of the week
        //     var date = formatDate(new Date(curr.setDate(last)));
        //     $http.get('https://api.coinbase.com/v2/prices/BTC-EUR/spot', {params: {'date': date}}).success(function (data) {
        //
        //         deferred.resolve(data);
        //
        //     }).error(function () {
        //
        //         deferred.reject("not found");
        //     });
        //     return deferred.promise;
        // },
        //
        // eth_short: function () {
        //     var eth_short = [];
        //     $http.get(cc + 'histohour', {params: {fsym: 'ETH', tsym: 'EUR'}}).then(function(data) {
        //         var result = data.data.Data;
        //         // console.log('result', new Date(result[0].time));
        //         // console.log('result', new Date(result[168].time * 1000));
        //         eth_short.push(eth_7d = {'amount': result[0].close, 'name': '7d', 'order': 8});
        //         eth_short.push(eth_3d = {'amount': result[72].close, 'name': '3d', 'order': 7});
        //         eth_short.push(eth_1d = {'amount': result[144].close, 'name': '1d', 'order': 6});
        //         eth_short.push(eth_12h = {'amount': result[166].close, 'name': '12h','order': 5});
        //         eth_short.push(eth_6h = {'amount': result[162].close, 'name': '6h','order': 4});
        //         eth_short.push(eth_3h = {'amount': result[166].close, 'name': '3h', 'order': 3});
        //         eth_short.push(eth_2h = {'amount': result[167].close, 'name': '2h', 'order': 2});
        //         eth_short.push(eth_1h = {'amount': result[168].close, 'name': '1h', 'order': 1});
        //     });
        //     return eth_short;
        // },
        // btc_short: function () {
        //     var btc_short = [];
        //     $http.get(cc + 'histohour', {params: {fsym: 'BTC', tsym: 'EUR'}}).then(function(data){
        //         var result = data.data.Data;
        //         // console.log('result', new Date(result[168].time * 1000));
        //         btc_short.push(btc_7d = {'amount': result[0].close, 'name': '7d', 'order': 8});
        //         btc_short.push(btc_3d = {'amount': result[72].close, 'name': '3d','order': 7});
        //         btc_short.push(btc_1d = {'amount': result[144].close, 'name': '1d', 'order': 6});
        //         btc_short.push(btc_12h = {'amount': result[166].close, 'name': '12h', 'order': 5});
        //         btc_short.push(btc_6h = {'amount': result[162].close, 'name': '6h', 'order': 4});
        //         btc_short.push(btc_3h = {'amount': result[166].close, 'name': '3h', 'order': 3});
        //         btc_short.push(btc_2h = {'amount': result[167].close, 'name': '2h', 'order': 2});
        //         btc_short.push(btc_1h = {'amount': result[168].close, 'name': '1h', 'order': 1});
        //     });
        //     return btc_short;
        // }

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