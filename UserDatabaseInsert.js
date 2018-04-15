//http://www.sqlitetutorial.net/sqlite-nodejs/
//Testing insert query
const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./db/users.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the users database.');
});

db.run("INSERT INTO USER (login, password, firstName, lastName, emailAddress) VALUES ('aa','Henkieisthebest','Henkie','Sjenkie','henkie@sjenkie.nl')");

function callback(row) {
    console.log("R:" + row);
}


db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Close the database connection.');
});