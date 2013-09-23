function routeConfig($routeProvider) {
	$routeProvider.
	when('/', {
		controller: ListCtrl,
		templateUrl: 'list.html'
	}).
	when('/view/:id', {
		controller: DetailCtrl,
		templateUrl: 'detail.html'
	}).
	otherwise({
		redirectTo: '/'
	});
	
}

app.config(routeConfig);
