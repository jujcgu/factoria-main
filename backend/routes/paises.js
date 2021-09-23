const express = require("express");
const router = express.Router();

const {
    getPaises,
    getPaisById,
    createPais,
    updatePais,
    deletePais,
} = require("../controllers/paisController");

router.get("/", getPaises);
router.get("/:paisId", getPaisById);

router.post("/create", createPais);
router.post("/update/:paisId", updatePais);
router.delete("/delete/:paisId", deletePais);
module.exports = router;