const db = require("./db");
const place = require("./place");
const activity = require("./activity");
const hotel = require("./hotel");
const restaraunt = require("./restaruant");

hotel.belongsTo(place);
restaurant.belongsTo(place);
activity.belongsTo(place);




// Require your models
// Make associations etc






