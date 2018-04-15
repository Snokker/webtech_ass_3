//https://www.youtube.com/watch?v=w-7RQ46RgxU&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp

//express var
var express = require('express');
var app = express();

//static files, give me some sweet css and images
app.use(express.static(__dirname));

//routing them html pages
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/Index.html');
});
app.get('/Index.html', function (req, res) {
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
app.get('/Plot.html', function (req, res) {
    res.sendFile(__dirname + '/Plot.html');
});
app.get('/KnowledgeBase.html', function (req, res) {
    res.sendFile(__dirname + '/KnowledgeBase.html');
});


//DATABASE LETS GO
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('mydb.db');
var check;
db.serialize(function () {

    db.run("CREATE TABLE if not exists user_info (info TEXT)");
    var stmt = db.prepare("INSERT INTO user_info VALUES (?)");
    for (var i = 0; i < 10; i++) {
        stmt.run("Ipsum " + i);
    }
    stmt.finalize();

    db.each("SELECT rowid AS id, info FROM user_info", function (err, row) {
        console.log(row.id + ": " + row.info);
    });
});

db.close();

//listen pls to localhost:8081
app.listen(8081);
console.log('hoi');