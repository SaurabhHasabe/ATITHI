const express = require("express");
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");

const app = express();
const port = 8080;
const MONGO_URL = "mongodb://127.0.0.1:27017/atithi";

app.engine("ejs",ejsMate);

app.set("view engine","ejs");
app.set("views", path.join(__dirname,"views"));

app.use(express.urlencoded({extended : true}));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname,"/public")));

app.listen(port,()=> {
    console.log(`Listning to The Port : ${port}`);
});

main()
    .then(() => {console.log("Connection Successful");})
    .catch((err) => {console.log(err);});

async function main() {
    await mongoose.connect(MONGO_URL);
}

// Root Route
app.get("/",(req,res) => {
    res.send("Working Root node");
});

// Index Route
app.get("/listings",async (req,res) => {
    let allListing = await Listing.find();
    res.render("listings/index.ejs",{allListing});
});

// New Route
app.get("/listings/new", (req,res)=> {
    res.render("listings/new.ejs");
});

// Create Route
app.post("/listings", async (req,res)=> {
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



