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
        vm.users = {};

        (!loginservice.isLogged()) ? $location.path('/login') : activate();

        function activate() {
            logger.info('Activated User View');
            getUsers();
        }

        function getUser(){
            dataservice.getRandomUser().then(function(data) { 
                console.log(data);               
                return vm.user = data;
            });
        }

        function getUsers(){
            dataservice.getRandomUsers().then(function(data) {                
                console.log(data);
                return vm.users = data;
            });
        }
    }
})();