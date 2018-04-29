/*$(function() {
	
	var listData = new Object();
	
	$(".list-content").hide();
	
	$(".search").click(function() {
		// validate and process form here
		$.ajax({
			type : "GET",
			url : "http://localhost:3000/search?q=iphone", // set your URL here
		}).done(function(response) {
			listData = JSON.parse(response);
			$('.list-content').show();
			$.each(listData.results, function(key, dataObj) {
				$.each(dataObj, function(key, value) {
					if(key == "brand") {
						$(".brand").append(value);
					}
				});
			});
			
		});
	});
});*/

var app = angular.module('viewSearchResultsApp', [])

app.controller("searchCtrl", [ '$scope', '$http', function($scope, $http) {
	
	/*$('#typeahead-input').typeahead({
		source : function(query, process) {
			return $.get('/search?q=' + query, function(response) {
				$scope.$apply(function() {
					//alert("here");
					//var jsonObj = JSON.parse(response.data);
					//$scope.searchResults = jsonObj.results;
					$scope.isDataPresent = true;
				});
				return process(response.search_results);
			});
		}
	});*/
	
	$scope.searchProductResults = function() {
		var req = {
				url : "/search", //"http://localhost:3000/search"
				type : "GET",	
				headers : {
					'Content-Type' : "application/json"
				},
				params : {
					q : $scope.searchStr
				}
		}
		$http(req).then(function(response) {
			var jsonObj = JSON.parse(response.data);
			$scope.searchResults = jsonObj.results;
			$scope.isDataPresent = true;
		}, function(error) {
			$scope.isDataPresent = false;
		});
	};

	$scope.addWishList = function(wishlist_param) {
		var req = {
				url : "/api/wishlist/add",
				method : 'POST',	
				headers : {
					'Content-Type': 'application/json'
				},
				data : {
					"name" : wishlist_param.name,
    				"brand" : wishlist_param.brand,
    				"price" : wishlist_param.price,
    				"sem3_id" : wishlist_param.upc,
    				"description" : wishlist_param.description,
    				"images_uri" : wishlist_param.images_uri,
    				"site_details" : wishlist_param.sitedetails[0],
    				"image": wishlist_param.images[0]
				}
		}
		$http(req).then(function(response) {
			$("#success-alert1").show();
			$("#success-alert1").fadeTo(2000, 1000).slideUp(1000, function(){
		            });
		}, function(error) {
			console.log(error)
		});
	};

} ]);