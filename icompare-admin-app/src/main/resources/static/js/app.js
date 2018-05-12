$(function() {
	$(".update_api_key").submit(function() {
		// validate and process form here
		$.ajax({
			type : "POST",
			url : "https://54.177.122.80:8090/api/key", // set your URL here
			data : {
				"accessKey" : $("#accessKey").val(),
				"secretKey" : $("#accessSecret").val()
			// send along this data (can add more
			// data separated by comma)
			}
		}).done(function(response) {
		});
	});
});