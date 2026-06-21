const mongoose = require("mongoose");
const { Schema } = mongoose;
const mainDB = require("../config/db");
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
productSchema.index({category:1,createdAt:-1});
const productModel = mainDB.model("product",productSchema,"product");
module.exports = productModel;