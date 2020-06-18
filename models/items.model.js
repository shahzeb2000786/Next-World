const mongoose = require ("mongoose");
const itemSchema = new mongoose.Schema ({//creates a e-item schema to create items that users can purchase
Name: {
  type: String,
  required: true,
  unique: true
},
Price: {
  type: String,
  required: true,
},
Rarity: {
  type: String,
  required: true,
},
Image: String
})

const Item = mongoose.model("Item", itemSchema)//creates a model called Item which is based on the itemSchema schema

module.exports = Item; //exports the item model
