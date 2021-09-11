const express = require('express')
const app = express()
const port = 3001

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'factoria'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});

app.get('/roles', (req, res) => {
    connection.query('SELECT * FROM factoria.roles', (err, result) => {
        console.log(result);        
    });
});

app.listen(port, () => {
  console.log(`El servidor esta corriendo en http://localhost:${port}`)
})