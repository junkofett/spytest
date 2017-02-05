angular
    .module('app.login')
    .directive('loginButton', loginButton);

function loginButton() {
    var directive = {
        restrict: 'E',
        templateUrl: 'app/login/loginButton.directive.html',
        scope: {
            max: '='
        },
        link: linkFunc,
        controller: Login,
        // note: This would be 'ExampleController' (the exported controller name, as string)
        // if referring to a defined controller in its separate file.
        controllerAs: 'vm',
        bindToController: true // because the scope is isolated
    };

    return directive;

    function linkFunc(scope, el, attr, ctrl) {
        console.log('LINK: scope.min = %s *** should be undefined', scope.min);
        console.log('LINK: scope.max = %s *** should be undefined', scope.max);
        console.log('LINK: scope.vm.min = %s', scope.vm.min);
        console.log('LINK: scope.vm.max = %s', scope.vm.max);
    }
}
