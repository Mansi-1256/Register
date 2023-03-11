import mongoose from "mongoose";
import validator from 'validator';

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Email is inValid")
            }
        }
    },
    phone: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isMobilePhone(value)) {
                throw new Error("Number is inValid")
            }
        }
    }
})

export default mongoose.model("User", userSchema)