angular.module('edit', [])
.controller('EditProfileCtrl', [
  '$scope','$http',
  function($scope,$http){
    $scope.name = '';
    $scope.location = '';
    $scope.threshold = 0;
    $scope.phone = '';
    $scope.eci = "UKs5YQUWhvJvrky73HCs8f";

    var udpateURL = 'http://35.161.218.80:8080/sky/event/'+
      $scope.eci+'/0002/sensor/profile_updated?name='+
      $scope.name+'&location='+
      $scope.location+'&threshold='+
      $scope.threshold+'&phone='+
      $scope.phone;
    $scope.saveProfile = function() {
      return $http.post(udpateURL).success(function(data){

      });
    };

  }
]);
