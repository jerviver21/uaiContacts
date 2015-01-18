
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>

<script src="<c:url value="/resources/js/pages/places_controller.js" />"></script>

<div class="row-fluid"  ng-controller="placesController">
	<!-- Title of the page with the search button -->
	<h2>
		<p class="text-center">
			Places
			
			<a href="#searchPlacesModal" id="placesHeaderButton" role="button" class="btn btn-inverse" data-toggle="modal">
				<i class="icon-search"></i>
			</a>			
		</p>
	</h2>
	
	<!-- Table with the list of places, accesing $scope.placesList from controller -->
	<div id="gridContainer" ng-class="{'': state == 'list', 'none': state != 'list'}">
       <table class="table table-bordered table-striped">
           <thead>
           <tr>
               <th scope="col">Address</th>
               <th scope="col">Phone</th>
               <th scope="col">Size</th>
               <th scope="col"></th>
           </tr>
           </thead>
           <tbody>
           <tr ng-repeat="place in placesList">
               <td class="tdContactsCentered">{{place.address}}</td>
               <td class="tdContactsCentered">{{place.phone}}</td>
               <td class="tdContactsCentered">{{place.size}}</td>
               <td class="width15">
                    <div class="text-center">
                        <input type="hidden" value="{{place.id}}"/>
                        <a href="#updatePlaceModal"
                           ng-click="selectedPlace(place);"
                           role="button"
                           title="<spring:message code="update"/>&nbsp;<spring:message code="place"/>"
                           class="btn btn-inverse" data-toggle="modal">
                            <i class="icon-pencil"></i>
                        </a>
                        <a href="#deletePlaceModal"
                           ng-click="selectedPlace(place);"
                           role="button"
                           title="<spring:message code="delete"/>&nbsp;<spring:message code="place"/>"
                           class="btn btn-inverse" data-toggle="modal">
                            <i class="icon-minus"></i>
                        </a>
                    </div>
                </td>
           </tr>
           </tbody>
       </table>
    </div>
    <br/>
    <div class="text-center">
    	<a href="#createPlaceModal" id="placesCreateHeaderButton" role="button" class="btn btn-inverse" data-toggle="modal">
    		<i class="icon-plus"></i>
    	</a>
    </div>
    
    <!-- Include of dialogs for operations such as update, create and search -->
    <jsp:include page="places_operations.jsp"></jsp:include>
</div>



