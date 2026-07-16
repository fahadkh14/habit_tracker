const Habit = require("../models/Habit");

exports.getHabits = async (req, res) => {

    const habits = await Habit.findAll();

    res.json(habits);

};

exports.createHabit = async (req, res) => {

    const { title, color } = req.body;

    const habit = await Habit.create({
        title,
        color
    });

    res.status(201).json(habit);

};

exports.updateHabit = async (req, res) => {

    const habit = await Habit.findByPk(req.params.id);

    if (!habit) {
        return res.status(404).json({
            message: "Habit Not Found"
        });
    }

    await habit.update(req.body);

    res.json(habit);

};

exports.deleteHabit = async (req, res) => {

    const habit = await Habit.findByPk(req.params.id);

    if (!habit) {
        return res.status(404).json({
            message: "Habit Not Found"
        });
    }

    await habit.destroy();

    res.json({
        message: "Habit Deleted"
    });

};