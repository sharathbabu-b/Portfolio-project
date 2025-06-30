import mongoose from "mongoose";
const ConfigureData=async()=>{
    const dburl="mongodb://127.0.0.1:27017/portfolio"
    try{
        const db=await mongoose.connect(dburl)
        console.log("Connected to MongoDB")
    }catch(error){
        console.log("Connection error in Mongodb")
    }
}
export default ConfigureData