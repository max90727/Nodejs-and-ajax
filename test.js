function execute(receivedData) {
  $( '#result' ).append('<h3>Show Ajax Result</h3><br>');
	console.log(receivedData);
	//$( '#result' ).append('<p>'+ receivedData +'</p>');
		
}

function ajaxSetup() {
	$.ajax({
		url: "http://localhost:3000/ajax/EU&callback=?",
    		type: "GET",
    		dataType: "jsonp",
		//contentType: "application/json",
		cache: false,
		timeout: 5000,
		success: function(data) {
			execute(data);
		}
	});
}


$( document ).ready(function() {
	//to do
	$('#ajax_test').click(function() {
		ajaxSetup();
	});
});
