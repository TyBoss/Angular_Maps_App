'use strict';
angular.module('angularSampleAppApp')
  .controller('MainCtrl', function ($scope) {


     var pyrmont = new google.maps.LatLng(-33.8665433,151.1956316);
     $scope.locations = [];

     $scope.getMapDetails = function(){
        var criteria = $scope.locationQueryCriteria;      
        var mapCanvas = document.querySelector('#mapCanvas');
        
        var map = new google.maps.Map(mapCanvas, {
          center: pyrmont,
          zoom: 15
        });

        var service = new google.maps.places.PlacesService(map);


        console.log(criteria);
        service.textSearch({query: criteria}, function(places, status){
             if(status == google.maps.places.PlacesServiceStatus.OK){
                for(var i = 0; i < places.length; i++){
                   console.log(places[i]);
                }
             }
        });

        google.maps.event.trigger( map, 'resize' );
     }
     $scope.addToLocationList = function(){
         console.log('here');
         $scope.locations.push($scope.locationQueryCriteria);
         console.log($scope.locations);;
     }
  });
