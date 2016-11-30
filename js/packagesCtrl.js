angular.module('devmtnTravel').controller('packagesCtrl', function($scope, mainSrv, $stateParams){

$scope.cities = mainSrv.travelInfo;

})
