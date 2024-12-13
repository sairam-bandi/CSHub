import mongoose from "mongoose"
const {Schema} = mongoose

const uri = "mongodb://127.0.0.1:27017"

export default async function connect(){
    
    await mongoose.connect(uri)
    console.log("Database connected");
}

