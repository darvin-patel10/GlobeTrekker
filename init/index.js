const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
require('dotenv').config();

const MONGO_URL = "mongodb+srv://darvin2004:10Sap04@globetrekker.ec2p0c4.mongodb.net/?appName=GlobeTrekker";

main()
    .then(() =>{
        console.log("connected to DB");
    })
    .catch((err)=>{
        console.log(err);
    });

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
};

initDB();