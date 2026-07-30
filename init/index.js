const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js")

const MONGO_URL = "mongodb://127.0.0.1:27017/atithi";

main()
    .then(() => {console.log("Connection Successful");})
    .catch((err) => {console.log(err);});

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async() => {
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    await console.log(Listing.find());
    console.log("Working Data is Saved Successfully");
}

initDB();