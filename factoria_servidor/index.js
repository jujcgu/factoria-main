const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
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

app.get('/api/select-departamento', (req, res) => {

  const sqlRolesSelect = "SELECT * FROM factoria.departamento";
  connection.query(sqlRolesSelect, (err, result) => {
    res.send(result);        
  });
});

app.get('/api/select-roles', (req, res) => {

    const sqlRolesSelect = "SELECT * FROM factoria.roles";
    connection.query(sqlRolesSelect, (err, result) => {
      res.send(result);        
    });
});

app.post('/api/insert-roles', (req, res) => {
  const nombre = req.body.nombre;
  const permisos = req.body.permisos;

  const sqlRolesInsert = "INSERT INTO roles (nombre, permisos) VALUES(?, ?)";
  connection.query(sqlRolesInsert, [nombre, permisos], (err, result) => {
    console.log(result);
  });
});

app.put("/api/update-roles", (req, res) => {
  const id = req.body.id;
  const nombre = req.body.nombre;
  connection.query(
    "UPDATE roles SET nombre = ? WHERE id = ?",
    [nombre, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.delete("/api/delete-roles/:id", (req, res) => {
  const id = req.params.id;
  connection.query("DELETE FROM roles WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get('/api/select-ciudad', (req, res) => {

  const sqlRolesSelect = "SELECT * FROM factoria.ciudad";
  connection.query(sqlRolesSelect, (err, result) => {
    res.send(result);        
  });
});

app.post('/api/insert-ciudad', (req, res) => {
const id = req.body.id;
const nombre = req.body.nombre;
const departamento_id = req.body.departamento_id;

const sqlRolesInsert = "INSERT INTO ciudad (id, nombre, departamento_id) VALUES(?, ?, ?)";
connection.query(sqlRolesInsert, [id, nombre, departamento_id], (err, result) => {
  console.log(result);
});
});

app.put("/api/update-ciudad", (req, res) => {
const id = req.body.id;
const nombre = req.body.nombre;
const departamento_id = req.body.departamento_id;

connection.query(
  "UPDATE factoria.ciudad SET nombre='', codigo_postal=NULL WHERE id=? AND departamento_id=?;",
  [nombre, id, departamento_id],
  (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  }
);
});

app.delete("/api/delete-ciudad/:id", (req, res) => {
const id = req.params.id;

connection.query("DELETE FROM ciudad WHERE id = ?", id, (err, result) => {
  if (err) {
    console.log(err);
  } else {
    res.send(result);
  }
});
});

app.get('/api/select-pais', (req, res) => {

  const sqlRolesSelect = "SELECT * FROM factoria.pais";
  connection.query(sqlRolesSelect, (err, result) => {
    console.log(result);
    res.send(result);        
  });
});

app.post('/api/insert-pais', (req, res) => {
const id = req.body.id;
const nombre = req.body.nombre;
const moneda = req.body.moneda;

const sqlRolesInsert = "INSERT INTO pais (id, nombre, moneda) VALUES(?, ?, ?)";
connection.query(sqlRolesInsert, [id, nombre, moneda], (err, result) => {
  console.log(result);
});
});

app.put("/api/update-pais", (req, res) => {
const id = req.body.id;
const nombre = req.body.nombre;
const moneda = req.body.moneda;
connection.query(
  "UPDATE pais SET nombre = ?, moneda = ? WHERE id = ?",
  [nombre, moneda, id],
  (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  }
);
});

app.delete("/api/delete-pais/:id", (req, res) => {
const id = req.params.id;
connection.query("DELETE FROM pais WHERE id = ?", id, (err, result) => {
  if (err) {
    console.log(err);
  } else {
    res.send(result);
  }
});
});

app.listen(port, () => {
  console.log(`El servidor esta corriendo en http://localhost:${port}`)
})