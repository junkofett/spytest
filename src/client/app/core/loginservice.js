(function() {
    'use strict';

    angular
        .module('app.core')
        .factory('loginservice', loginservice);

    /* @ngInject */
    function loginservice($http, $location, $q, $rootScope, exception, logger) {
        var isPrimed = false;
        var primePromise;

        var service = {
            login: login,
            isLogged: isLogged,
            ready: ready
        };

        return service;

        function login(user){
            if(user.password == '1234' && user.name == 'tyler'){
                return true;
            }else{
                return 'Wrong username or password.'
            }
        }

        function isLogged(){
            return $rootScope.token != undefined;
        }

        function prime() {
            // This function can only be called once.
            if (primePromise) {
                return primePromise;
            }

            primePromise = $q.when(true).then(success);
            return primePromise;

            function success() {
                isPrimed = true;
                logger.info('Primed data');
            }
        }

        function ready(nextPromises) {
            var readyPromise = primePromise || prime();

            return readyPromise
                .then(function() { return $q.all(nextPromises); })
                .catch(exception.catcher('"ready" function failed'));
        }

    }
})();
