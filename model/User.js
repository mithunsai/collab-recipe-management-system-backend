import mongoose from "mongoose";
import bcrypt from 'bcrypt'

const {Schema} = mongoose;
const userSchema= new Schema({
    name: String,
    email: String,
    password: String,
    verified: {
        type: Boolean,
        default: false
    },
})
function generateHash(password){
    return bcrypt.hash(password, 12)
}
userSchema.pre('save', function(next){
    const user= this
    generateHash(user.password).then((hash)=>{
        user.password = hash
        next()
    }).catch((error)=>{
        next(error)
    })

})

export const User = mongoose.model("User",userSchema)
