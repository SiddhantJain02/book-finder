const Book = require("../models/bookmodels");

// Controller to get records from DB
const getBooks = async (req, res) => {
  try {
        const MongoRes = await Book.find({});

      return res.status(200).json({
        message: "Data",
        data:MongoRes
      });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const addBooks = async (req, res) => {
  try {
        const BookDetail = req.body;
    const MongoRes = await Book.create(BookDetail);

      return res.status(200).json({
        message: "Data",
        data:MongoRes
      });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};




const updateBooks = async (req, res) => {
    try {
      const { id,bookName,price,author } = req.body;
      if (!id) {
        return res.status(404).json({
          message: `Please enter${!id && " id"} parameter!`,
        });
      }
      // NULL VALIDATION
      if (!id || !bookName || !price || !author) {
        return res.status(404).json({
          message: `Please enter ${!id && " id, "} ${!bookName && "Book Name ,"} ${!price && " price"} ${!author && "Author Name ,"} fields!`,
        });
      }
      // UPDATE THE RECORD
      const updatedData = await Book.findByIdAndUpdate(id, { bookName, price, author });
      res.json({ message: " Updated!" });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };


//Controller to delete records from DB
const deleteBooks = async (req, res) => {
    try {
      const {id} = req.body;
      if (!id) {
        return res.status(404).json({
          message: `Please enter valid${!id && " id"} parameter!`,
        });
      }
      // FIND IF THE RECORDS EXISTS
      const id_delete = await Book.findById({ _id: id });
      if (!id_delete) {
        return res.status(404).json({
          message: "No such data found!",
        });
      }
  
      // DELETE THE EXPENSE BASED IN 'id'
      const deletebook = await Book.findByIdAndRemove(id);
      return res.json({ message: "Data Deleted!" });
    } catch (error) {
      return res.status(404).json({ message: error.message });
    }
  };
  



module.exports = {
  getBooks,
  addBooks,
  updateBooks,
  deleteBooks
};