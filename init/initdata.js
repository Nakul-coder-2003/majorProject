const mongoose=require('mongoose');
const initData=require("./database2.js");
const Listing=require("../models/listing.js");

/////////database connectin////////

main().then((res)=>{
    console.log("DataBase connected");
})
.catch((err)=>{{
    console.log(err);
}});


async function main(){
await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
console.log("db connected");
}


async function initDB(){
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("done");

}

initDB();
