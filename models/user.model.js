import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "User name is required"],
    trim: true,
    maxlength: 50,
    minlength: 2,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    trim: true,
    lowercase: true,
    match: [/\S+@\S+\.\S+/, "Please fill a valid email address"],
  },
    password: {
        type: String,
        required: [true, "User Password is required"],
        minlength: 6,
    },
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

export default User;


