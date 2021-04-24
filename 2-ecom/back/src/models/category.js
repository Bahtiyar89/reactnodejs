const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 16,
      unique: true
    }
  },
  { timestamps: true }
);
//we exports as category
module.exports = mongoose.model("Category", categorySchema);
