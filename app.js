var express = require('express');
var http = require('http');
var fs = require('fs');
var url = require("url");

var app = express();
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/Index.html');
});
app.get('/About.html', function (req, res) {
    res.sendFile(__dirname + '/About.html');
});
app.get('/Contact.html', function (req, res) {
    res.sendFile(__dirname + '/Contact.html');
});
app.get('/content.html', function (req, res) {
    res.sendFile(__dirname + '/content.html');
});
app.get('/DIY1.html', function (req, res) {
    res.sendFile(__dirname + '/DIY1.html');
});
app.get('/DIY2.html', function (req, res) {
    res.sendFile(__dirname + '/DIY2.html');
});
app.get('/DIY3.html', function (req, res) {
    res.sendFile(__dirname + '/DIY3.html');
});
app.get('/DIY4.html', function (req, res) {
    res.sendFile(__dirname + '/DIY4.html');
});
//app.get('/Login_test', function (req, res) {
//    res.sendFile(__dirname + '/Login_test.html');
//});
app.get('/Plot.html', function (req, res) {
    res.sendFile(__dirname + '/Plot.html');
});

app.listen(8081);

//var server = http.createServer(function (req, res) {
//    console.log('request was made: ' + req.url);
//    res.writeHead(200, { 'Content-Type': 'text/html' });
//    var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
//    myReadStream.pipe(res);
//}).listen(8081);

//http.createServer(function (request, response) {

//    var parsedUrl = url.parse(request.url, true);
//    var queryAsObject = parsedUrl.query;
//    var name = queryAsObject.name;
//    var gender = queryAsObject.gender;
//    var salution = (gender == "male") ? "Mr." : "Ms.";
//    response.writeHead(200, { 'Content-Type': 'text/plain' });
//    response.end('Dear' + salution + '' + name +
//        ', thank you for submitting your contact info\n');
//}).listen(8081);

console.log('hoi');