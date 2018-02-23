angular.module('timing', [])
.controller('MainCtrl', [
  '$scope','$http',
  function($scope,$http){
    $scope.timings = [];
    $scope.eci = "UKs5YQUWhvJvrky73HCs8f";

    var bURL = '/sky/event/'+$scope.eci+'/eid/timing/started';
    $scope.addTiming = function() {
      var pURL = bURL + "?number=" + $scope.number + "&name=" + $scope.name;
      return $http.post(pURL).success(function(data){
        $scope.getAll();
        $scope.number='';
        $scope.name='';
      });
    };

    var iURL = '/sky/event/'+$scope.eci+'/eid/timing/finished';
    $scope.finished = function(number) {
      var pURL = iURL + "?number=" + number;
      return $http.post(pURL).success(function(data){
        $scope.getAll();
      });
    };

    var gURL = 'http://35.161.218.80:8080/sky/cloud/'+$scope.eci+'/temperature_store/temperatures';
    $scope.getAll = function() {
      return $http.get(gURL).success(function(data){
        angular.copy(data, $scope.timings);
      });
    };

    $scope.getAll();

    $scope.timeDiff = function(timing) {
      var bgn_sec = Math.floor(Date.parse(timing.time_out)/1000);
      var end_sec = Math.floor(Date.parse(timing.time_in)/1000);
      var sec_num = end_sec - bgn_sec;
      var hours   = Math.floor(sec_num / 3600);
      var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
      var seconds = sec_num - (hours * 3600) - (minutes * 60);

      if (hours   < 10) {hours   = "0"+hours;}
      if (minutes < 10) {minutes = "0"+minutes;}
      if (seconds < 10) {seconds = "0"+seconds;}
      return hours+':'+minutes+':'+seconds;
    }
  }
]);
