import { Schema,model } from "mongoose";
const AssetSchema=new Schema({
     userId: { type:Schema.Types.ObjectId, ref: "User" },
  type: { type: String, enum: ["stock", "mutualFund"] },
  symbol: String,
  quantity: Number,
},{timestamps:true});
const Assets=model("Assets",AssetSchema)
export default Assets

