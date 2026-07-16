const express = require("express");

const router = express.Router();

const auth = require("../middleware/authMiddleware");

const habitController = require("../controllers/habitController");

router.get("/", auth, habitController.getHabits);

router.post("/", auth, habitController.createHabit);

router.put("/:id", auth, habitController.updateHabit);

router.delete("/:id", auth, habitController.deleteHabit);

module.exports = router;