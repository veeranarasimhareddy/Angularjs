//create a Module
var app = angular.module('ClockApp',[]);

// Create a Controller
app.controller('ClockAppCtrl',function($scope,$interval) {

    var indianClock = function () {
      var today = new Date();
      var options = {timeZone : 'Asia/Kolkata'};
      $scope.indianTime = today.toLocaleTimeString('en-US',options);
      $scope.indianDate = today.toLocaleDateString('en-US',options);
    };
    $interval(indianClock,1000);
     var USAClock = function () {
      var today = new Date();
      var options = {timeZone : 'America/New_York'};
      $scope.USATime = today.toLocaleTimeString('en-US',options);
      $scope.USADate = today.toLocaleDateString('en-US',options);
    };
    $interval(USAClock,1000);
     var ChinaClock = function () {
      var today = new Date();
      var options = {timeZone : 'Asia/Shanghai'};
      $scope.ChinaTime = today.toLocaleTimeString('en-US',options);
      $scope.ChinaDate = today.toLocaleDateString('en-US',options);
    };
    $interval(ChinaClock,1000);

});