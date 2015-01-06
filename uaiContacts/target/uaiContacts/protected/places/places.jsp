<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<div class="row-fluid" ng-app="places" ng-controller="placesController">

	<div id="gridContainer" ng-class="{'': state == 'list', 'none': state != 'list'}">
            <table class="table table-bordered table-striped">
                <thead>
                <tr>
                    <th scope="col">Address</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Size</th>
                </tr>
                </thead>
                <tbody>
                <tr ng-repeat="place in placesList">
                    <td class="tdContactsCentered">{{place.address}}</td>
                    <td class="tdContactsCentered">{{place.phone}}</td>
                    <td class="tdContactsCentered">{{place.size}}</td>
                </tr>
                </tbody>
            </table>

        </div>
</div>
