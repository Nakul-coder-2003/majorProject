const express = require("express");
const app = express();
const mongoose = require("mongoose");
const listing = require("./models/listing.js");

main().then(()=>{
    console.log("connection sucessfull!");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
}

app.get("/",(req,res)=>{
    res.send("app is work");
})

app.get("/testListing",async(req,res)=>{
    // let listing3 = new listing({
    //     title : "my title",
    //     description : "this is description",
    //     image : "",
    //     price : 25000,
    //     location : "agra",
    //     country : 'india',
    // });
    // await listing3.save();
    res.send("database save");
})

app.listen("8080",()=>{
    console.log("app is listening");
})

