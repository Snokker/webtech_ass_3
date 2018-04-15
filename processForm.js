//This is for processing forms, and inserting them into the user database. If a user already exists, it will not insert.
//http://www.sqlitetutorial.net/sqlite-nodejs

var http = require("http");
var url = require("url");
const sqlite3 = require('sqlite3').verbose();

let sqlSelect = `SELECT DISTINCT login FROM USER
                    ORDER BY login`;
let sqlCheck = 'SELECT * FROM USER WHERE login == ';
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
        //first check, then insert
        db.get('SELECT * FROM USER WHERE login = "' + login + '"', function (err, row) {
            if (err) {
                throw err;
                closeDB(db);
            }
            if (row) {
                response.end("Account already exists");
                closeDB(db);
            }
            else {

                db.run(`INSERT INTO USER (login, password, firstName, lastName, emailAddress) VALUES (?,?,?,?,?)`, [login, password, firstName, lastName, email], (err, row) => {
                    if (err) {
                        throw err;
                        closeDB(db);
                    }
                    else {
                        //var salution = (gender === "male") ? "Mr." : "Ms.";
                        response.writeHead(200, { 'Content-Type': 'text/plain' });
                        response.end('Dear ' + '' + login +
                            ', thank you for submitting your contact info\n');
                        closeDB(db);
                    }
                    
                });
            }
        });
    });
    function callback(row) {
        console.log("R:" + row);
    }


}).listen(8081);

//seperate function for closing db, as this always has to execute last.
function closeDB(db)
{
    db.close((err) => {
        if (err) {
            console.error(err.message);
        }
        console.log('Close the database connection.');
    });
}


