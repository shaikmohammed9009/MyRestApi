require("dotenv").config();
const express = require("express");

const app = express();

const Port = process.env.PORT || 3400;
const product_data = require("./Routes/products");
const connectDb = require("./db/connect");
// app.get("/", (req, res) => {
//   res.send("shaik mohammed");
// });
// middleware router set
app.use("/api/product", product_data);

const start = async () => {
  try {
    await connectDb(process.env.MONGODB_URL);
    app.listen(Port, () => {
      console.log(`${Port} connect`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
