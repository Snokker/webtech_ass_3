var http = require("http");
var url = require("url");

http.createServer(function (request, response) {

    var parsedUrl = url.parse(request.url, true);
    var queryAsObject = parsedUrl.query;
    var name = queryAsObject.name;
    var gender = queryAsObject.gender;
    var salution = (gender == "male") ? "Mr." : "Ms.";
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Dear' + salution + '' + name +
        ', thank you for submitting your contact info\n');
}).listen(8081);