const pool = require("../pool");
const sql = require("../sql/departamentos_queries");

exports.getDepartamentos = async (req, res) => {
  try {
    pool.query(sql.listDepartamento(), (err, response) => {
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

exports.getDepartamentoById = async (req, res) => {
  let id = req.params.departamentoId;
  try {
    pool.query(sql.getDepartamentoById(id), (err, response) => {
      if (err) console.log(err);
      if (response) res.json(response);
      res.end();
    });
  } catch (error) {
    return res.json(error);
  }
};

exports.createDepartamento = async (req, res) => {
  let departamento = req.body;

  try {
    pool.query(sql.createDepartamento(departamento), (err, response) => {
      if (err) console.log(err);

      res.json({ success: "departamentos succesfully created" });
      res.end();
    });
  } catch (error) {
    return res.json(error);
  }
};

exports.updateDepartamento = async (req, res) => {
  let id = req.params.departamentoId;
  let departamento = req.body;

  try {
    pool.query(sql.editDepartamento(departamento, id), (err, response) => {
      if (err) console.log(err);
      if (response)
        res.json({ success: "Departamento was succesfully updated!" });
      res.end();
    });
  } catch (error) {
    return res.json({ error: "Departamento wasn't able to get updated" });
  }
};

exports.deleteDepartamento = async (req, res) => {
  let id = req.params.departamentoId;

  try {
    pool.query(sql.deleteDepartamento(id), (err, response) => {
      if (err) console.log(err);
      if (response)
        res.json({ success: "Departamento was succesfully deleted!" });
      res.end();
    });
  } catch (error) {
    return res.json({ error: "There was an error deleting the departamento" });
  }
};
