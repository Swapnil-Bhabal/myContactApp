import mongoose from "mongoose";
import { boolean } from "webidl-conversions";

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
    isDelivered: {
        type: Boolean,
        require: true,
        default: false,
    },
    deliveredAt: {
        type: Date,
    },
}, {timestamps: true}
);

const User = mongoose.model('User', userSchema);

export default User;