var http = require('http');
var fs = require('fs');
var path = require('path');
var url = require('url');

var server = http.createServer(function onRequest(request, response) {
	var urlParts = url.parse(request.url);
	var page = 'pages' + urlParts.pathname;

	fs.exists(page, function fileExists(exists) {
		if (exists) {
			response.writeHead(200, {'Content-Type':'text/html'});
			fs.createReadStream(page).pipe(response);
		} else {
			response.write('Page not found');
			response.end();
		}
	});
}).listen(3000);