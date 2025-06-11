// server/routes/scholarshipRoutes.js

const express = require("express");
const router = express.Router();
const { getScholarshipsFromHF } = require("../controllers/scholarshipController");

router.get("/huggingface", getScholarshipsFromHF);

module.exports = router;
