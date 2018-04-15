//This is for processing forms, and inserting them into the user database. If a user already exists, it will not insert.
//http://www.sqlitetutorial.net/sqlite-nodejs

var http = require("http");
var url = require("url");
const sqlite3 = require('sqlite3').verbose();

let sqlSelect = `SELECT DISTINCT login FROM USER
                    ORDER BY login`;
let sqlCheck = 'SELECT login name FROM USER';
let sqlInsert = `INSERT INTO USER (login) VALUES (login)`;


http.createServer(function (request, response) {

    //parsing of url
    var parsedUrl = url.parse(request.url, true);
    var queryAsObject = parsedUrl.query;
    var login = queryAsObject.login;
    var password = queryAsObject.password;
    var firstName = queryAsObject.firstName;
    var lastName = queryAsObject.lastName;
    var email = queryAsObject.email;

    //opening database
    let db = new sqlite3.Database('./db/users.db', sqlite3.OPEN_READWRITE, (err) => {
        if (err) {
            console.error(err.message);
        }
        console.log('Connected to the users database.');
    });

    // Queries scheduled here will be serialized.
    db.serialize(() => {
        db.run(`INSERT INTO USER (login, password, firstName, lastName, emailAddress) VALUES (?,?,?,?,?)`, [login, password, firstName, lastName, email], (err, row) => {
                if (err === 19) {
                    response.writeHead(200, { 'Content-Type': 'text/plain' });
                    response.end('This username already exists!');
                }
                else if (err)
                {
                    throw err;
                }
                else
                {
                    //var salution = (gender === "male") ? "Mr." : "Ms.";
                    response.writeHead(200, { 'Content-Type': 'text/plain' });
                    response.end('Dear ' + '' + login +
                        ', thank you for submitting your contact info\n');
                }

            });
    });
    function callback(row) {
        console.log("R:" + row);
    }

    db.close((err) => {
        if (err) {
            console.error(err.message);
        }
        console.log('Close the database connection.');
    });


}).listen(8081);

