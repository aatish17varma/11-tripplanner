const db = require("./db");
const place = require("./place");
const Sequelize = require("sequelize");

const hotel = db.define("hotel", {
  name: Sequelize.STRING,
  num_stars: Sequelize.STRING,
  amenities: Sequelize.STRING 
})

module.exports = {
    hotel
}
