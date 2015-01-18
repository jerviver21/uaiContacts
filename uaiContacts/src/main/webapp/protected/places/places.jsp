
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
	
	<div ng-class="{'alert badge-inverse': displaySuccess == true, 'none': displaySuccess == false}">
        <h4 class="displayInLine">
            <p class="messageToUser displayInLine"><i class="icon-info-sign"></i>&nbsp;{{message}}</p>
        </h4>
    </div>

    <div ng-class="{'alert alert-block alert-error': displayError == true , 'none': displayError == false}">
        <h4><i class="icon-info-sign"></i> Error! </h4><br/>

        <p>{{message}}</p>
    </div>
	
	<!-- Table with the list of places, accesing $scope.placesList from controller -->
	<div id="gridContainer">
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
    		&nbsp;&nbsp;<spring:message code="create"/>&nbsp;<spring:message code="place"/>
    	</a>
    </div>
    
    <!-- Include of dialogs for operations such as update, create and search -->
    <jsp:include page="places_operations.jsp"></jsp:include>
</div>



