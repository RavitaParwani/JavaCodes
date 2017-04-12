var myApp=angular.module("myModule",[]);
var myFunc=function($scope){
var student={
		fname:"Rohit",
		lname:"sharma",
		course:"Android"
	};

	$scope.student=student;
	$scope.message="Learning AngularJS";
};
myApp.controller("myController",myFunc);