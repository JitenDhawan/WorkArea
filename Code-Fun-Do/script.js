var app=angular.module("myApp",[]);
app.controller("myCtrl",function($scope){
	$scope.bbfirst="LightCyan";
	$scope.obfirst="OldLace";
	$scope.ibfirst="Lavender";
	$scope.pfirst="https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/16386969_1767692746887377_1929223042816855817_n.jpg?oh=2dbeb5104ed08d97af502aec29880efa&oe=596FED4F";
	$scope.nfirst="Jiten Dhawan";
	$scope.bbsecond="LightCyan";
	$scope.obsecond="OldLace";
	$scope.ibsecond="Lavender";
	$scope.psecond="https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/13263894_1059360844130519_3745057438564613740_n.jpg?oh=ee971c452aea76e6c75648c80533a5ad&oe=596064D5";
	$scope.nsecond="Devashish Mehta";
	$scope.bbthird="LightCyan";
	$scope.obthird="OldLace";
	$scope.ibthird="Lavender";
	$scope.pthird="https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/15492590_1406208976057309_3084535920846425649_n.jpg?oh=08379d7df2068e3075fdbcb9555a5e25&oe=595E2581";
	$scope.nthird="Pranjal Prasoon";
});
setTimeout(function(){
	alert("Try changing colors, Picture, Name, and have fun.;-)");
},300);