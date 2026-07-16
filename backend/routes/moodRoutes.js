const express = require("express");

const router = express.Router();

const auth = require("../middleware/authMiddleware");

const moodController = require("../controllers/moodController");

router.get("/", auth, moodController.getMoods);

router.post("/", auth, moodController.createMood);

module.exports = router;