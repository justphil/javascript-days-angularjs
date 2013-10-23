app.config(function ($routeProvider) {

    $routeProvider.
        when('/', {
            controller : 'listCtrl',
            templateUrl: 'list.html'
        }).
        when('/view/:id', {
            controller : 'detailCtrl',
            templateUrl: 'detail.html'
        }).
        when('/edit/:id', {
            controller : 'editCtrl',
            templateUrl: 'form.html'
        }).
        when('/add', {
            controller: 'addCtrl',
            template  : 'form.html'
        }).
        otherwise({
            redirectTo: '/'
        });

});
