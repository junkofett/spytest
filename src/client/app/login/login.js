(function() {
    'use strict';

    angular
        .module('app.login')
        .controller('Login', Login);

    /* @ngInject */
    function Login(dataservice, loginservice, $location, $rootScope, logger) {
        /*jshint validthis: true */
        var vm = this;
        vm.user = [];
        vm.title = 'Login';
        vm.submit = submit;

        activate();

        function activate() {
            logger.info('Activated Login View');
        }

        function submit(){
            console.log(loginForm.$valid);

            if(loginservice.login(vm.user)){
                $location.path('/user');
                console.log($rootScope.token);
            }
            //console.log(dataservice.getRandomUser());            
        }
    }
})();