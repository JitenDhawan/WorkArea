var app=angular.module("myApp",[]);
app.controller("myCtrl",function($scope){
	$scope.bbfirst="LightCyan";
	$scope.obfirst="OldLace";
	$scope.ibfirst="Lavender";
	$scope.pfirst="https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg";
	$scope.nfirst="Albert Einstein";
	$scope.bbsecond="LightCyan";
	$scope.obsecond="OldLace";
	$scope.ibsecond="Lavender";
	$scope.psecond="https://upload.wikimedia.org/wikipedia/commons/d/d4/N.Tesla.JPG";
	$scope.nsecond="Nikola Tesla";
	$scope.bbthird="LightCyan";
	$scope.obthird="OldLace";
	$scope.ibthird="Lavender";
	$scope.pthird="https://upload.wikimedia.org/wikipedia/commons/3/39/GodfreyKneller-IsaacNewton-1689.jpg";
	$scope.nthird="Isaac Newton";
});
setTimeout(function(){
	alert("Try changing colors, Picture, Name, and have fun.;-)");
},300);
