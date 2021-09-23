const pool = require("../pool");
const sql = require("../sql/paises_queries");

exports.getPaises = async (req, res) => {
    try {
        pool.query(sql.listPais(), (err, response) => {
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

exports.getPaisById = async (req, res) => {
    let id = req.params.paisId;
    try {
        pool.query(sql.getPaisById(id), (err, response) => {
            if (err) console.log(err);
            if (response) res.json(response);
            res.end();
        });
    } catch (error) {
        return res.json(error);
    }
};

exports.createPais = async (req, res) => {
    let pais = req.body;

    try {
        pool.query(sql.createPais(pais), (err, response) => {
            if (err) console.log(err);

            res.json({ success: "Pais creado correctamente" });
            res.end();
        });
    } catch (error) {
        return res.json(error);
    }
};

exports.updatePais = async (req, res) => {
    let id = req.params.paisId;
    let pais = req.body;

    try {
        pool.query(sql.editPais(pais, id), (err, response) => {
            if (err) console.log(err);
            if (response)
                res.json({ success: "Pais fue actualizado correctamente!" });
            res.end();
        });
    } catch (error) {
        return res.json({ error: "Pais no pudo ser actualizado correctamente" });
    }
};

exports.deletePais = async (req, res) => {
    let id = req.params.paisId;

    try {
        pool.query(sql.deletePais(id), (err, response) => {
            if (err) console.log(err);
            if (response)
                res.json({ success: "Pais fue eliminado!" });
            res.end();
        });
    } catch (error) {
        return res.json({ error: "Ocurrió un error al eliminar el pais" });
    }
};