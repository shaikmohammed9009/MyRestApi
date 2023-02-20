const mongoose = require("mongoose");
uri = "";
const coonectdb = (uri) => {
  // console.log("CONNECT DB");
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    // useUnifiedTology: true,
  });
};

module.exports = coonectdb;
