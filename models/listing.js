const { type, set } = require("express/lib/response");
const mongoose = require("mongoose");

const listingShema = new mongoose.Schema({
    title:{
        type : String,
    },
    description: String,
    image : {
        type : String,
        default : "https://unsplash.com/photos/person-in-swimming-pool-during-daytime-rlwE8f8anOc",
        set : (v)=> v===""?"https://unsplash.com/photos/person-in-swimming-pool-during-daytime-rlwE8f8anOc":v,
    },
    price : Number,
    location : String,
    country : String,
});

const listing = mongoose.model("listing",listingShema);

module.exports = listing;