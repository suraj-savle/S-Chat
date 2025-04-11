import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        unique: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: Number,
        required: true,
        minlenth: 0,
    },
    Profile: {
        type: Number,
        default : ""
    }
})

const User = mongoose.model("user", UserSchema)

export default User;