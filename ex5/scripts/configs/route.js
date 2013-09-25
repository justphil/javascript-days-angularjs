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
	when('/edit', {
		controller: 'editCtrl',
		templateUrl: 'edit.html',
		resolve: {
			app: function ($q,$timeout) {
				var defer = $q.defer();
				$timeout(function() {
					defer.resolve();
				},2000);
				return defer.promise;
			}
		}
	}).
	otherwise({
		redirectTo: '/'
	});
	
}

app.config(routeConfig);
