const express = require("express");
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");

const app = express();
const port = 8080;
const MONGO_URL = "mongodb://127.0.0.1:27017/atithi";

app.set("view engine","ejs");
app.set("views", path.join(__dirname,"views"));

app.use(express.urlencoded({extended : true}));
app.use(methodOverride("_method"));

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

// Index Route
app.get("/listings",async (req,res) => {
    let allListing = await Listing.find();
    // console.log(allListing);
    res.render("listings/index.ejs",{allListing});
});

// New Route
app.get("/listings/new", (req,res)=> {
    res.render("listings/new.ejs");
});

// Create Route
app.post("/listings", async (req,res)=> {
    // console.log(req.body.listing);
    let newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
});

// Edit Route
app.get("/listings/:id/edit", async (req,res)=> {
    let {id} = req.params;
    let listing = await Listing.findById(id);
    res.render("listings/edit.ejs",{listing});
});

// Update Route 
app.put("/listings/:id", async(req,res)=> {
    let {id} = req.params;
    console.log(req.body.listing);
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
    res.redirect(`/listings/${id}`);
});


// Delete Route
app.delete("/listings/:id",async (req,res) => {
    let {id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect("/listings");
});

// Show Route 
app.get("/listings/:id", async (req,res) => {
    let {id} = req.params;
    let listing = await Listing.findById(id);
    console.log(listing);
    res.render("listings/show.ejs",{listing});
});


// app.get("/testListing",(req,res) => {
//     let sampleListing = new Listing({
//         title : "Hivare Forest",
//         description : "The quitest and peaceful place for solo's ! ",
//         image : "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         price : 1729.50,
//         location : "Near Vita, Maharashtra",
//         country : "India"
//     });
//      sampleListing.save().
//      then( () => {res.send("sample data saved successfully");})
//      .catch(err => {console.log(err);});
// });


