const express = require("express");
const {
  getBooks,
  addBooks,
  updateBooks,
  deleteBooks
} = require("../controllers/bookcontroller");
const router = express.Router();

router.get("/books", getBooks); // GET Contact URL
router.post("/addBooks", addBooks); // GET Contact URL
router.put("/updateBooks", updateBooks); // PUT Contact URL
router.delete("/deleteBooks", deleteBooks); // DELETE Contact URL

module.exports = router;