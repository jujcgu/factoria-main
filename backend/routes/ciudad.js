const express = require("express");
const router = express.Router();

const {
    selectCiudad,
    insertCiudad,
    updateCiudad,
    deleteCiudad
} = require("../controllers/ciudadController");

router.get("/selectCiudad", selectCiudad);

router.post("/insertCiudad", insertCiudad);
router.post("/updateCiudad/", updateCiudad);
router.delete("/deleteCiudad/:id", deleteCiudad);
module.exports = router;