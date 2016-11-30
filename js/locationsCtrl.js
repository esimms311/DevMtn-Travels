angular.module('devmtnTravel').controller('locationsCtrl', function($scope, mainSrv, $stateParams){

$scope.cities = mainSrv.travelInfo;
$scope.cities.id = $stateParams.id;
})
