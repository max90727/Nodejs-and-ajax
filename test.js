function execute(receivedData) {
  $( '#result' ).append('<h3>Show Ajax Result</h3><br>');
	console.log(receivedData);
	//$( '#result' ).append('<p>'+ receivedData +'</p>');
}

function ajaxSetup(country_path) {
	var path = {filePath: country_path };
	$.ajax({
		url: "http://localhost:3000/ajax",
    		type: "GET",
    		dataType: "json",
		data: path,
		cache: false,
		timeout: 5000,
		success: function(data) {
			execute(data);
		}
	});
}

function ajaxJSONPSetup() {
	$.ajax({
		url: "http://localhost:3000/JSONP?cb=?",
    		type: "GET",
    		dataType: "jsonp",
		cache: 'false',
		jsonp: 'cb',
		timeout: 5000,
		success: function(data) {
			execute(data);
			},
		error: function() {
				console.log("a oh!");
			}
	});
}


$( document ).ready(function() {
	//to do
	$('#ajax_test').click(function() {
		//ajaxSetup();		//use json type
		ajaxJSONPSetup();	////use jsonp type
	});
});
