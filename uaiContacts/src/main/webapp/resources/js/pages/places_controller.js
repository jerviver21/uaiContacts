function placesController($scope, $http) {
	var url = "/uaiContacts/protected/places/"
	var config = {params: {}};
	
	$scope.state='init';
	$scope.placesList=[];
		

	$http.get(url, config).success(function(response) {
		$scope.state='list';
		$scope.placesList = response;
	}).error(function() {
		$scope.state='error';
	});
	
}