angular.module('timing', [])
.controller('MainCtrl', [
  '$scope','$http',
  function($scope,$http){
    $scope.name = "Melanie";
    $scope.timings = [];
    $scope.violations = [];
    $scope.eci = "UKs5YQUWhvJvrky73HCs8f";

    $scope.goToProfile = function(){
      window.location = "profile.html";
    }

    var gURL = 'http://35.161.218.80:8080/sky/cloud/'+$scope.eci+'/temperature_store/temperatures';
    $scope.getAll = function() {
      return $http.get(gURL).success(function(data){
        angular.copy(data, $scope.timings);
      });
    };

    var tURL = 'http://35.161.218.80:8080/sky/cloud/'+$scope.eci+'/temperature_store/threshold_violations';
    $scope.getViolations = function() {
      return $http.get(tURL).success(function(data){
        angular.copy(data, $scope.violations);
      });
    };

    $scope.getAll();
    $scope.getViolations();

  }
]);
