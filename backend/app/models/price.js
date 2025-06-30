import { Schema,model } from "mongoose";
const priceSchema=new Schema({
    symbol: String,
  price: Number,
},{timestamps:true})
const Price=model("Price",priceSchema)
export default Price