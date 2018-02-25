angular.module('profile', [])
.controller('ProfileCtrl', [
  '$scope','$http',
  function($scope,$http){
    $scope.name = "Melanie";
    $scope.location = "";
    $scope.threshold = 0;
    $scope.phone = "";
    $scope.eci = "UKs5YQUWhvJvrky73HCs8f";

    var nameURL = 'http://35.161.218.80:8080/sky/cloud/'+$scope.eci+'/temperature_store/name';
    $scope.getName = function() {
      return $http.get(nameURL).success(function(data){
        $scope.name = data;
      });
    };

    var locationURL = 'http://35.161.218.80:8080/sky/cloud/'+$scope.eci+'/temperature_store/location';
    $scope.getLocation = function() {
      return $http.get(locationURL).success(function(data){
        $scope.location = data;
      });
    };

    var thresholdURL = 'http://35.161.218.80:8080/sky/cloud/'+$scope.eci+'/temperature_store/threshold';
    $scope.getThreshold = function() {
      return $http.get(thresholdURL).success(function(data){
        $scope.threshold = data;
      });
    };

    var phoneURL = 'http://35.161.218.80:8080/sky/cloud/'+$scope.eci+'/temperature_store/phone';
    $scope.getPhone = function() {
      return $http.get(phoneURL).success(function(data){
        $scope.phone = data;
      });
    };

    $scope.getName();
    $scope.getLocation();
    $scope.getThreshold();
    $scope.getPhone();

  }
]);
