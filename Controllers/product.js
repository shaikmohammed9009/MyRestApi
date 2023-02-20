const GetProduct = require("../models/Product");
const getAllProduct = async (req, res) => {
  const { company, name } = req.query;

  const objQuery = {};
  if (company) {
    objQuery.company = { $regex: company, $options: "i" };
  }
  if (name) {
    objQuery.name = { $regex: name, $options: "i" };
  }
  const mydata = await GetProduct.find({}).select("name company price");
  res.status(200).json({ nhint: mydata.length });

  // console.log(mydata);
};

const getTestingProductAll = async (req, res) => {
  const { company, name, featured, sort, select } = req.query;
  const objQuery = {};

  if (company) {
    objQuery.company = { $regex: company, $options: "c" };
  }

  if (name) {
    objQuery.name = { $regex: name, $options: "M" };
    console.log(objQuery);
  }

  if (featured) {
    objQuery.featured = featured;
  }

  
  let apiData = GetProduct.find(objQuery);
  if (sort) {
    const sortFix = sort.replace(",", " ");
    apiData = apiData.sort(sortFix);
  }


  if (select) {
    const sortFix = select.split(",").join(" ");
    apiData = apiData.sort(sortFix);
  }


  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 2;

  let skip = (page - 1) * limit;

  apiData = apiData.skip(skip).limit(limit);
  console.log(objQuery);
  const mydata = await apiData;
  res.status(200).json({ mydata, nhint: mydata.length });
  console.log(mydata);
};

module.exports = { getAllProduct, getTestingProductAll };
