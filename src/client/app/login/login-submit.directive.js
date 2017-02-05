(function() {
    'use strict';

    angular
        .module('app.login')
        .directive('loginSubmit', loginSubmit);
    
     function loginSubmit(loginservice, $location, $rootScope){
      var directive =  {
           restrict: 'E',
           scope: false,
           link: link,
           templateUrl: 'app/login/login-submit.directive.html',
           controller: 'Login',
           controllerAs: 'vm',
           bindToController: true
        };

        function link(scope, element, attrs, vm) {
            element.on('click', function (e) {
                if(vm.loginForm.$invalid) return;

                let resp = loginservice.login(vm.loginForm.user);

                if(resp === true){
                    $location.path('/user');
                    $rootScope.token = 1;
                }else{
                    vm.loginForm.user.password.$setValidity(wrongCredentials, true);
                    
                    console.log(loginForm.user.name);
                }

              //  ngModel.$setValidity('wrongPassword', false);
                /*
                var id = element.attr('data-id-usuario');

                if(!user.id_usuario == id) ngModel.$setValidity('unique', false);
                  */  
            });
        }

        return directive;
      };
    }
)();