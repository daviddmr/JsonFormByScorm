angular.module("jsonForm", ["ngRoute", "ngMaterial", "ngMessages", "ngAnimate"])
    .config(['$routeProvider', "$mdThemingProvider",
        function($routeProvider, $mdThemingProvider) {
            $routeProvider
                .when('/form', {
                    templateUrl: 'app/views/form.html'
                })
                .otherwise('/form');

            $mdThemingProvider.theme('default')
                .primaryPalette('green')
                .accentPalette('grey');
        }])
;