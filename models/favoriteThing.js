const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FavoriteThingSchema = new Schema({
  favoriteThing: { type: String, required: true },
  description: { type: String, required: true },

});

module.exports = mongoose.model("FavoriteThing", FavoriteThingSchema);
