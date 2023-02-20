const mongoose = require("mongoose");

const ProducetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: [true, "price must be provided"],
  },
  featured: {
    type: Boolean,
    default: true,
  },

  rating: {
    type: Number,
    default: 4.9,
  },

  created: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,
    enum: {
      values: ["Apple", "Dell", "MI", "samsung", "vivo", "Dell"],
      message: `{VALUE} is not Support`,
    },
  },
});

module.exports = mongoose.model("Product", ProducetSchema);
