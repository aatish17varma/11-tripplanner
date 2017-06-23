const db = require("./db");
const Sequelize = require("sequelize");

const place = db.define("place", {
  address: Sequelize.STRING,
  city: Sequelize.STRING, 
  state: Sequelize.STRING, 
  phone: Sequelize.STRING,
  location: Sequelize.ARRAY(Sequelize.FLOAT)
})


module.exports = {
    place
}

