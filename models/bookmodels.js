const mongoose = require("mongoose");

const bookSchema = mongoose.Schema(
  {
    bookName: {
      type: String,
      required: true,
      uppercase: true,
    },
    price: {
      type: Number,
      required: true,
    },
    author:{
        type:String,
        required:true,
    }
  }
);

module.exports = mongoose.model("Books", bookSchema);