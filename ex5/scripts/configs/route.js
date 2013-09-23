function routeConfig($routeProvider) {
	$routeProvider.
	when('/', {
		controller: 'listCtrl',
		templateUrl: 'list.html'
	}).
	when('/view/:id', {
		controller: 'detailCtrl',
		templateUrl: 'detail.html'
	}).
	otherwise({
		redirectTo: '/'
	});
	
}

app.config(routeConfig);
