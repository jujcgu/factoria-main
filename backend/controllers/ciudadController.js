const pool = require("../pool");
const sql = require("../sql/ciudad_queries");

exports.selectCiudad = async (req, res) => {
  try {
    pool.query(sql.selectCiudad(), (err, response) => {
      if (err) throw err;
      if (response) {
        res.json(response);
      }
      res.end();
    });
  } catch (error) {
    return res.json(error);
  }
};

exports.insertCiudad = async (req, res) => {
  let ciudad = req.body;

  try {
    pool.query(sql.insertCiudad(ciudad), (err, response) => {
      if (err) console.log(err);

      res.json({ success: "Ciudad creada exitosamente" });
      res.end();
    });
  } catch (error) {
    return res.json(error);
  }
};

exports.updateCiudad = async (req, res) => {
  let id = req.params.id;
  let nombre = req.body.nombre;
  let codigo_postal = req.body.codigo_postal;
  let departamento_id = req.body.departamento_id;  

  try {
    pool.query(sql.updateCiudad(nombre,codigo_postal,departamento_id, id), (err, response) => {
      if (err) console.log(err);      
      if (response)
        res.json({ success: "¡Ciudad actualizada con exito!" });
      res.end();
    });
  } catch (error) {
    return res.json({ error: "No se pudo actualizar ciudad" });
  }
};

exports.deleteCiudad = async (req, res) => {
  let id = req.params.id;

  try {
    pool.query(sql.deleteCiudad(id), (err, response) => {
      if (err) console.log(err);
      if (response)
        res.json({ success: "¡Ciudad eliminada con exito!" });
      res.end();
    });
  } catch (error) {
    return res.json({ error: "Hubo un error al eliminar la ciudad" });
  }
};