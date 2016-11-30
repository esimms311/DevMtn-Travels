angular.module('devmtnTravel').controller('bookedCtrl', function($scope, mainSrv, $stateParams){

$scope.cities= mainSrv.travelInfo;
console.log($stateParams);
(function(){
  var travelInfo = $scope.cities;
  for(var i = 0; i < travelInfo.length; i++) {
    if(travelInfo[i].id == $stateParams.id) {
      $scope.thisCity = travelInfo[i];
      console.log($stateParams);
      console.log(travelInfo[i]);
    }
  }
})();
})
