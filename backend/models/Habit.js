const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Habit = sequelize.define("Habit", {

    title: {
        type: DataTypes.STRING,
        allowNull: false
    },

    color: {
        type: DataTypes.STRING,
        defaultValue: "#0d6efd"
    }

});

module.exports = Habit;