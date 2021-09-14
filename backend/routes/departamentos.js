const express = require("express");
const router = express.Router();

const {
  getDepartamentos,
  getById,
  createDepartamento,
  updateDepartamento,
  deleteDepartamento,
} = require("../controllers/departamentoController");

router.get("/", getDepartamentos);
router.get("/:departamentoId", getById);

router.post("/create", createDepartamento);
router.post("/update/:departamentoId", updateDepartamento);
router.delete("/delete/:departamentoId", deleteDepartamento);
module.exports = router;
