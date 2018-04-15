//http://www.sqlitetutorial.net/sqlite-nodejs/
const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./db/users.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the users database.');
});

let sql = `SELECT DISTINCT login name FROM USER
           ORDER BY login`;

db.all(sql, [], (err, rows) => {
    if (err) {
        throw err;
    }
    rows.forEach((row) => {
        console.log(row.name);
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