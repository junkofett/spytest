(function() {
    'use strict';

    angular
        .module('app.user')
        .run(appRun);

    // appRun.$inject = ['routehelper']

    /* @ngInject */
    function appRun(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/user',
                config: {
                    templateUrl: 'app/user/user.html',
                    controller: 'User',
                    controllerAs: 'vm',
                    title: 'User',
                    settings: {
                        nav: 4,
                        content: '<i class="fa fa-lock"></i> user'
                    }
                }
            }
        ];
    }
})();