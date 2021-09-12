const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const port = 3001

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'factoria'
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/get-roles', (req, res) => {

    const sqlRolesSelect = "SELECT * FROM factoria.roles";
    connection.query(sqlRolesSelect, (err, result) => {
        res.send(result);        
    });
});

app.post('/api/editar-roles', (req, res) => {

    const nombre = req.body.nombre;
    const id = req.body.id;

    const sqlRolesUpdate = "UPDATE roles SET nombre WHERE id=?";
    connection.query(sqlRolesUpdate, [id, nombre]
    , (err, result) => {
      console.log(result);
    });
});

app.listen(port, () => {
  console.log(`El servidor esta corriendo en http://localhost:${port}`)
})