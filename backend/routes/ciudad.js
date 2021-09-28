const express = require("express");
const router = express.Router();
const pool = require("../pool");

router.get("/select-ciudad/:departamento_id", (req, res) => {
    const departamento_id = req.params.departamento_id;
    pool.query("SELECT factoria.ciudad.*, factoria.departamento.nombre as departamento_nombre FROM factoria.ciudad, factoria.departamento where factoria.ciudad.departamento_id = factoria.departamento.id and departamento_id=? order by nombre", departamento_id, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
});

router.post("/insert-ciudad", (req, res) => {    
    const id = req.body.id;
    const nombre = req.body.nombre;
    const departamento_id = req.body.departamento_id;
  
    pool.query(
        "INSERT INTO ciudad (id, nombre, departamento_id) VALUES(?, ?, ?)",
      [id, nombre, departamento_id],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send("Values Inserted");
        }
      }
    );
});

router.put("/update-ciudad", (req, res) => {
    const id = req.body.id;
    const nombre = req.body.nombre;
    const departamento_id = req.body.departamento_id;
    
    pool.query(
      "UPDATE factoria.ciudad SET nombre = ? WHERE id = ? AND departamento_id = ?",
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

router.delete("/delete-ciudad/:id", (req, res) => {
    const id = req.params.id;
    pool.query("DELETE FROM ciudad WHERE id = ?", id, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
});

module.exports = router;