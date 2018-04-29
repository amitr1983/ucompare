var app = angular.module('showWishlistApp', [])

app.controller('wishlistCtrl', ['$scope', '$http',
	function($scope, $http) {
		$scope.formData = {};

		$http.get('/api/wishlist').success(function(data) {
		$scope.groups = data;
	}, function(error) {
		$scope.isDataPresent = false;
		console.log('Error: ' + error);
	});

		$scope.deleteSensor = function(sensor) {
			console.log("product to be deleted");
			$http({
				method : 'DELETE',
				url : '/api/wishlist/delete',
				params : {
					q : $scope.searchStr
				}
			}).success(function(data){
				//if(data.statusCode == 200){
					console.log("Wishlist delete success ");
					$("#delete-success").show();
		            $("#delete-success").fadeTo(2000, 1000).slideUp(1000, function(){
		            });
				//}
			}).error(function(error){
				console.log("error is: "+error);
				$("#delete-fail").show();
	            $("#delete-fail").fadeTo(2000, 1000).slideUp(1000, function(){
	            });
			});
		};

}]);