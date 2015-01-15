function LocationController($scope, $location) {
	if($location.$$absUrl.lastIndexOf('/places') > 0){
        $scope.activeURL = 'places';
    }else if($location.$$absUrl.lastIndexOf('/contacts') > 0){
        $scope.activeURL = 'contacts';
    } else{
        $scope.activeURL = 'home';
    }
}