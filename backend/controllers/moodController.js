const Mood = require("../models/Mood");

exports.getMoods = async (req, res) => {

    const moods = await Mood.findAll();

    res.json(moods);

};

exports.createMood = async (req, res) => {

    const mood = await Mood.create(req.body);

    res.status(201).json(mood);

};