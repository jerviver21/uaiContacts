function placesController($scope, $http) {
	$scope.url = "/uaiContacts/protected/places/"
	$scope.config = {params: {}};
	
	$scope.state='init';
	$scope.placesList=[];
	
	
	
	$scope.getPlacesList = function () {
		var url = $scope.url;
		var config = $scope.config;
		
		$http.get(url, config).success(function(response) {
			$scope.state='list';
			$scope.placesList = response;
		}).error(function() {
			$scope.state='error';
		});
	}
	
	
	
	$scope.searchPlace = function(searchPlaceForm) {
		var url = $scope.url +  $scope.searchFor;
		var config = $scope.config;
		
		$http.get(url, config).success(function(response) {
			$scope.state='list';
			$scope.placesList = response;
		}).error(function() {
			$scope.state='error';
		});
		
		$("#searchPlacesModal").modal('hide');
	}
	
	
	$scope.getPlacesList();
}