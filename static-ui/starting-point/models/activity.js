const db = require("./db");
const place = require("./place");
const Sequelize = require('sequelize');

const activity = db.define("place", {
  name: Sequelize.STRING,
  age_range: Sequelize.STRING, 
})

activity.belongsTo(place);

module.exports = {
    activity
}
