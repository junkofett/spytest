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
        vm.wrongCredentials = false;

        activate();

        function activate() {
            logger.info('Activated Login View');
            //loginForm.user.password.$error(wrongCredentials, pending);
        }

        function submit(){
            let resp = loginservice.login(vm.loginForm.user);
            if(resp === true){
                $location.path('/user');
                $rootScope.token = 1;
            }else{
                vm.loginForm.user.password.$setValidity(wrongCredentials, true);

                console.log(vm.loginForm.user.name);
            }
        }
    }
})();