import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    address : String
})
const userModel = mongoose.model('users',userSchema)

export default mongoose.model('users',userSchema)