import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    contactNumber: {
        type: Number,
        required: true,
        unique: true,
    },
    otp: {
        type: Number,
        required: true,
        default: 0,
    },
},
{timestamps: true}
);

const User = mongoose.model('User', userSchema);

export default User;