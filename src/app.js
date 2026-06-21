const dotenv = require('dotenv');
dotenv.config();
const path = require("path");
const express = require('express');
const app = express()
const browseProduct = require("./routes/browseProduct")
const port = 3000
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.json());
app.use("/products",browseProduct)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})