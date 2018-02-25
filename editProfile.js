angular.module('edit', [])
.controller('EditProfileCtrl', [
  '$scope','$http',
  function($scope,$http){
    $scope.eci = "UKs5YQUWhvJvrky73HCs8f";

    var udpateURL = 'http://35.161.218.80:8080/sky/event/'+
      $scope.eci+'/0002/sensor/profile_updated'
    $scope.saveProfile = function() {
      var url = updateURL +
        '?name='+$scope.name+
        '&location='+$scope.location+
        '&threshold='+$scope.threshold+
        '&phone='+$scope.phone;
      return $http.post(url).success(function(data){
        $scope.name = '';
        $scope.location = '';
        $scope.threshold = 0;
        $scope.phone = '';
      });
    };

  }
]);
