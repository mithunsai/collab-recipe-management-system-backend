import mongoose from "mongoose";

const {Schema} = mongoose;
const userSchema= new Schema({
    userName: String,
    email: String,
    password: String,
    roles: Array
})

export const User = mongoose.model("User",userSchema)
