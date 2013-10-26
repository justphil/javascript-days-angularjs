app.config(function ($routeProvider) {

    $routeProvider.
        when('/', {
            templateUrl: 'base.html'
        }).
        when('/route1', {
            templateUrl: 'route1.html'
        }).
        when('/route2', {
            templateUrl: 'route2.html'
        }).
        otherwise({
            redirectTo: '/'
        });

});
