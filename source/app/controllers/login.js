/**
 * Simple exampel of an angular controller. Notice that it lives off
 * of the controllers module, which was included in the applicaiton module.
 */
angular.module('controllers').controller('LoginController', ['$scope', '$location', '$window', function ($scope, $location, $window) {
    $scope.login = login;

    function login(passwd) {
        if (passwd === "supersecret") {
            $location.path("/home");
            $scope.invalidPasswd = false;
            localStorage.setItem("login", true);
        }
        else{
            $scope.invalidPasswd = true;
            $window.alert('Please provide a valid password');
        }
    }

}]);