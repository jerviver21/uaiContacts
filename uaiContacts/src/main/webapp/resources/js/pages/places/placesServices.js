angular.module('places.services', [])
	//Services
	.factory('placesService', function($http) {
		var places ={};
		var url = "/uaiContacts/protected/places/"
		var config = {params: {}};
		
		places.getPlaces = function() {
			return $http.get(url, config);
		}
		
		return places;
	})