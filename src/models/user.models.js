import mongoose from "mongoose";
import bcrypt from "bcrypt"
import { jwt } from "jsonwebtoken";
const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true
    },
    fullname:{
        type:String,
        required:true,
        lowercase:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
    },
    avatar:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    refershToken:{
        type:String,
        required:true
    },
    coverimage:{
        type:String,
        required:true
    },
    watchhistory:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Video"
    }]
},{timestamps:true})

userSchema.pre("save",async function(next){
    if (!this.isModified("password")) return next();
    this.password = bcrypt.hash(this.password,12);
    next()

})

userSchema.methods.checkPassword = async function(password){
    return await bcrypt.compare(password,this.password)
}

userSchema.methods.generateAccessToken = function(){
    return jwt.sign({_id:this._id,username:this.username,fullname:this.fullname},process.env.ACCESS_TOKEN_SECRET,{expiresIn:process.env.ACCESS_TOKEN_EXPIRY})
}

userSchema.methods.generateRefershToken = function(){
    return jwt.sign({_id:this._id},process.env.REFERSH_TOKEN_SECRET,{expiresIn:process.env.REFERSH_TOKEN_EXPIRY})
}

const User = mongoose.model("User",userSchema)

export {User}