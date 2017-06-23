const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost/tripplanner"); //db is a sequelize object connected to our database

module.exports = db;
