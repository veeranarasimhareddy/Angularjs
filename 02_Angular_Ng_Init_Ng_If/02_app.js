// Create an Angular JS Module
var app = angular.module('AgeSelectionApp',[]);

// Create a Controller
app.controller('AgeSelectionAppCtrl',function($scope) {
    $scope.selectedAge = null;
});