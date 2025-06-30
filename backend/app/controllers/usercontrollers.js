import User from "../models/users.js";
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"
const userCtrl={}
userCtrl.register=async(req,res)=>{
    const {name,email,password}=req.body
    try{
        const totaluser=await User.countDocuments()
        const user=new User({name,email,password})
        const salt=await bcryptjs.genSalt()
        const hashPassword=await bcryptjs.hash(password,salt)
        user.password=hashPassword
        await user.save()
        res.status(201).json(user)
    }catch(error){
        console.log(error)
        res.status(500).json({error:"Registration Failed"})
    }
}
userCtrl.login=async(req,res)=>{
    const {email,password}=req.body
    try{
        const user=await User.findOne({email})
        if(!user){
            return res.status(404).json({errors:"Invalid email/password"})
        }
        const isVerified=await bcryptjs.compare(password,user.password)
        if(!isVerified){
            return res.status(404).json({errors:'invalid password'})
        }
        const tokenData={userId:user._id}
        const token=jwt.sign(tokenData,process.env.SECRET_KEY,{expiresIn:"7d"})
        res.json({token:`Bearer ${token}`})
    }catch(error){
        console.log(error)
        res.status(500).json({error:"Login failed"})
    }
}
// userCtrl.getUserprofile=async(req,res)=>{
//     try{
//         const user=await user.findById(req)
//     }
// }
export default userCtrl