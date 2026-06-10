const express = require("express");
const router = express.Router();

const {
  schedule
} = require("../controllers/scheduler.controller");

router.get("/schedule", schedule);

module.exports = router;