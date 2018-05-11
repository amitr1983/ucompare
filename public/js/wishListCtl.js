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

		$scope.deleteWishList = function(wishlistid) {
			console.log("product to be deleted");
			console.log('/'+wishlistid)

			$http({
				method : 'GET',
				url : '/api/wishlist/delete/'+wishlistid,
			}).success(function(data){
					console.log("Wishlist delete success ");
					$("#alert-success").show();
		            $("#alert-success").fadeTo(2000, 1000).slideUp(1000, function(){
		            });
			}).error(function(error){
				console.log("error is: "+error);
				$("#alert-success").show();
	            $("#alert-success").fadeTo(2000, 1000).slideUp(1000, function(){
	            });
			});
		};	


 

}]);