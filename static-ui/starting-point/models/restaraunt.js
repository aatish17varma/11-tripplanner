const db = require("./db");
const place = require("./place");
const Sequelize = require("sequelize");


const restaraunt = db.define("place", {
  name: Sequelize.STRING,
  cuisine: new list(Sequelize.STRING), 
  price: Sequelize.INTEGER
})
restaraunt.belongsTo(place); //think of 'a' is included in 'b'      OR      one of b's properties is a

module.exports = {
    restaraunt
}





