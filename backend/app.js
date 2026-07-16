require("dotenv").config();

const express = require("express");
const cors = require("cors");

const sequelize = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const habitRoutes = require("./routes/habitRoutes");
const moodRoutes = require("./routes/moodRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/habits", habitRoutes);
app.use("/api/moods", moodRoutes);

app.get("/", (req, res) => {
    res.json({
        message: "Habit Tracker API Running 🚀"
    });
});

sequelize.authenticate()
.then(() => {
    console.log("✅ MySQL Connected");
})
.catch(err => console.log(err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server Running on ${PORT}`);
});