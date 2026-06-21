const mongoose = require("mongoose");
const uri = process.env.DB_URI;
const mainDB = mongoose.createConnection(uri, {
  serverSelectionTimeoutMS: 10000
});
module.exports = mainDB;