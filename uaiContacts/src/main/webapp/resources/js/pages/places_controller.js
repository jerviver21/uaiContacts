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
	
	$scope.createPlace = function(createPlaceForm) {
		var url = $scope.url;
		var config = {headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}};
		
		$http.post(url, $.param($scope.place), config).success(function(response) {
			$scope.state='list';
			$scope.placesList = response;
		}).error(function() {
			$scope.state='error';
		})
		
		$("#createPlaceModal").modal('hide');
		
	}
	
	
	$scope.getPlacesList();
}