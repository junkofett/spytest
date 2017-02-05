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
            let resp = loginservice.login(vm.user);
            if(resp === true){
                $location.path('/user');
                $rootScope.token = 1;
            }else{
                angular.element.find('#button-submit').addClass('error');
            }
            //console.log(dataservice.getRandomUser());            
        }
    }
})();