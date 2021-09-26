const express = require("express");
const router = express.Router();
const pool = require("../pool");

router.get("/select-roles", (req, res) => {
    pool.query("SELECT * FROM factoria.roles", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
});

router.post("/insert-roles", (req, res) => {    
    const nombre = req.body.nombre;
    const permisos = req.body.permisos;
  
    pool.query(
        "INSERT INTO factoria.roles (nombre, permisos) VALUES('', '')",
      [nombre, permisos],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send("Values Inserted");
        }
      }
    );
});

router.put("/update-roles", (req, res) => {
    const id = req.body.id;
    const nombre = req.body.nombre;
    
    pool.query(
      "UPDATE factoria.roles SET nombre=? WHERE id=?",
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

router.delete("/delete-roles/:id", (req, res) => {
    const id = req.params.id;
    pool.query("DELETE FROM factoria.roles WHERE id=?", id, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
});

module.exports = router;