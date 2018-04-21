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
	
	$scope.searchResults = function() {
		var req = {
				url : "http://localhost:3000/search",
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

} ]);