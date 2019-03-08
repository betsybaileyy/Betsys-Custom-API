const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const id = FavoriteThing[FavoriteThing.length - 1].id + 1;

const FavoriteThingSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  // id: { type: 'Number', required: true }
});

module.exports = mongoose.model("FavoriteThing", FavoriteThingSchema);
