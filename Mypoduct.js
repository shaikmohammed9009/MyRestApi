require("dotenv").config();
const connectDB = require("./db/connect");

const Product = require("./models/Product");
const productjson = require("./product.json");
const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    await Product.deleteMany();
    
    await Product.create(productjson);
    console.log("shaik");
  } catch (e) {
    console.log(e);
  }
};
start();
