const express = require("express");

const router = express.Router();

const {
    createPenerbangan,
    getAllPenerbangan,
    getPenerbanganById
} = require("../controllers/penerbanganController");

router.post("/", createPenerbangan);
router.get("/", getAllPenerbangan);
router.get("/", getPenerbanganById);

module.exports = router;