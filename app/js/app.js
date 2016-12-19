angular.module("jsonForm", ["ngRoute", "ngMaterial", "ngMessages", "ngAnimate"])
    .config(['$routeProvider', "$mdThemingProvider",
    function($routeProvider, $mdThemingProvider) {
        $routeProvider
            .when('/form', {
                templateUrl: 'views/form.html',
                controller: 'formCtrl'
            })
        .otherwise('/form');

         $mdThemingProvider.theme('default')
            .primaryPalette('green')
            .accentPalette('grey');
    }])
;