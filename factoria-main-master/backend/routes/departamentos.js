const express = require("express");
const router = express.Router();

const {
  getDepartamentos,
  getDepartamentoById,
  createDepartamento,
  updateDepartamento,
  deleteDepartamento,
} = require("../controllers/departamentoController");

router.get("/", getDepartamentos);
router.get("/:departamentoId", getDepartamentoById);

router.post("/create", createDepartamento);
router.post("/update/:departamentoId", updateDepartamento);
router.delete("/delete/:departamentoId", deleteDepartamento);
module.exports = router;
