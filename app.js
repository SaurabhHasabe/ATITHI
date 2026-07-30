const express = require("express");
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");

const app = express();
const port = 8080;
const MONGO_URL = "mongodb://127.0.0.1:27017/atithi";

app.listen(port,()=> {
    console.log(`Listning to The Port : ${port}`);
});

main()
    .then(() => {console.log("Connection Successful");})
    .catch((err) => {console.log(err);});

async function main() {
    await mongoose.connect(MONGO_URL);
}

app.get("/",(req,res) => {
    res.send("Working Root node");
});

app.get("/testListing",(req,res) => {
    let sampleListing = new Listing({
        title : "Hivare Forest",
        description : "The quitest and peaceful place for solo's ! ",
        image : "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price : 1729.50,
        location : "Near Vita, Maharashtra",
        country : "India"
    });
     sampleListing.save().
     then( () => {res.send("sample data saved successfully");})
     .catch(err => {console.log(err);});
});


