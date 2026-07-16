const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const HabitLog = sequelize.define("HabitLog", {

    date: {
        type: DataTypes.DATEONLY
    },

    completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }

});

module.exports = HabitLog;