const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Mood = sequelize.define("Mood", {

    mood: {
        type: DataTypes.INTEGER
    },

    date: {
        type: DataTypes.DATEONLY
    }

});

module.exports = Mood;