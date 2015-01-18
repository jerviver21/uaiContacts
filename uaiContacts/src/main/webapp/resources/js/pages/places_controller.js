function placesController($scope, $http) {
	$scope.url = "/uaiContacts/protected/places/"
	$scope.config = {params: {}};
	$scope.placesList=[];
	
	
	$scope.displayValidationError = false;
	$scope.displayError = false;
	$scope.displaySuccess= false;
	$scope.message = "";
	
	
	
	$scope.getPlacesList = function () {
		var url = $scope.url;
		var config = $scope.config;
		$scope.setInitStateForOperation();
		
		var state = "success";
		//Consulta por ajax con método GET, se consulta el servicio RESTFUL.
		$http.get(url, config).success(function(response) {
			$scope.placesList = response;
		}).error(function(status) {
			state = "error";
		});
		
		$scope.setFinalStateForOperation(null, null, state);
	}
	
	
	
	$scope.searchPlace = function(searchPlaceForm) {
		//Se valida si los datos del formulario de entrada son correctos (requeridos, formato, etc)
		if(!searchPlaceForm.$valid){
			$scope.displayValidationError = true;
			return;
		}
		$scope.setInitStateForOperation();
		
		var url = $scope.url +  $scope.searchFor;
		var config = $scope.config;
		
		var state = "success";

		//Consulta por ajax con método GET, se consulta el servicio RESTFUL. (Lo que retorne el método viene en objetos JSON)
		$http.get(url, config).success(function(response) {
			$scope.placesList = response;
		}).error(function(status) {
			state = "error";
		});
		
		$scope.setFinalStateForOperation("#searchPlacesModal", null, state);

	}
	
	$scope.createPlace = function(createPlaceForm) {
		//Se valida si los datos del formulario de entrada son correctos (requeridos, formato, etc)
		if(!createPlaceForm.$valid){
			$scope.displayValidationError = true;
			return;
		}
		$scope.setInitStateForOperation();
		
		var url = $scope.url;
		var config = {headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}};
		
		
		var state = "success";

		$http.post(url, $.param($scope.place), config).success(function(response) {
			$scope.placesList = response;
		}).error(function(status) {
			state = "error";
		});
		
		$scope.setFinalStateForOperation("#createPlaceModal", "Create", state);
		
	}
	
	$scope.selectedPlace = function (place) {
        var selectedPlace = angular.copy(place);
        $scope.place = selectedPlace;
	}
	
	$scope.deletePlace = function() {
		var url = $scope.url+$scope.place.id;
		var params = {};
		$scope.setInitStateForOperation();
		
		var state = "success";

		$http({
			method:'DELETE',
			url:url, 
			params: params})
		.success(function(response) {
				$scope.placesList = response;
			}).error(function(status) {
				state = "error";
			});
			
		$scope.setFinalStateForOperation("#deletePlaceModal", "Delete", state);

	}
	
	$scope.updatePlace = function(updatedContactForm) {
		//Se valida si los datos del formulario de entrada son correctos (requeridos, formato, etc)
		if(!updatedContactForm.$valid){
			$scope.displayValidationError = true;
			return;
		}
		$scope.setInitStateForOperation();
		var url = $scope.url+$scope.place.id;
		var config = $scope.config;
		
		var state = "success";
		
		$http.put(url, $scope.place , config).success(function(response) {
			$scope.placesList = response;
		}).error(function(status) {
			state = "error";
		});
		
		$scope.setFinalStateForOperation("#updatePlaceModal", "Update", state);

	}
	
	//Ajusta los valores de las variables antes de iniciar la operación.
	$scope.setInitStateForOperation = function() {
		$("#loadingModal").modal('show');
		$scope.displayValidationError = false;
		$scope.displayError = false;
		$scope.displaySuccess= false;
	}
	
	//Ajusta los valores de las variables una vez terminada la operación.
	$scope.setFinalStateForOperation= function(modalId, operation, state) {
		$("#loadingModal").modal('hide');
		if(modalId){
			$(modalId).modal('hide');
		}
		if(state=="success"){
			$scope.message="The "+operation+" was succesfull";
			if(operation){
				$scope.displaySuccess= true;
			}
		}
		if(state=="error"){
			$scope.message="The "+operation+" Failed";
			if(operation){
				$scope.displayError = true;
			}
			
		}
	}
	
	
	$scope.getPlacesList();
}