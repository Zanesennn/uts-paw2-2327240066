const express = require("express");

const router = express.Router();

const {
    createMaskapai,
    getAllMaskapai
} = require("../controllers/maskapaiController");

router.post("/", createMaskapai);
router.get("/", getAllMaskapai);

module.exports = router;