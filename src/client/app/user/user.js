(function() {
    'use strict';

    angular
        .module('app.user')
        .controller('User', User);

    /* @ngInject */
    function User(dataservice, loginservice, $location, logger) {
        /*jshint validthis: true */
        var vm   = this;
        vm.title = 'User';
        vm.user  = {};

        activate();

        function activate() {
            if(!loginservice.isLogged()){
                $location.path('/login');
            }else{
                logger.info('Activated User View');
                getRandomUser();
            }
        }

        function getRandomUser(){
            dataservice.getRandomUser().then(function(data) {                
                return vm.user = data;
            });
        }
    }
})();