var myApp=angular.module("myModule",[]);
var myFunc=function($scope){
var student={
		fname:"Amit",
		lname:"Gupta",
		course:"Angular"
	};

	$scope.student=student;
	$scope.message="Learning AngularJS";
};
myApp.controller("myController",myFunc);
