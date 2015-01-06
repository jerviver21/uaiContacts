angular.module('places.controllers', []).
	//Controlador de places
	controller('placesController', function($scope, placesService) {
		$scope.state='init';
		$scope.placesList=[];
		
		placesService.getPlaces().success(function(response) {
			$scope.state='list';
			$scope.placesList = response.places;
		}).error(function() {
			$scope.state='error';
		});
		
	})
;