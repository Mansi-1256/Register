import User from "../model/user.js";

//Register user
export const signup = async (req, res) => {
    const { firstname, lastname, email, phone } = req.body
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser)
            return res.status(400).json({ message: "User already exist" });
        const result = await User.create({ firstname, lastname, email, phone })
        res.status(200).json({ result, message: "Register sucessfully" })
    } catch (error) {
        res.status(500).json({ message: error })
    }
}
//Sign In user
export const signin = async (req, res) => {
    const { email } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (!existingUser)
            return res.status(404).json({ message: "User doesn't exist" });
        res.status(200).json({ result: existingUser, message: "Sign in sucesfully" })

    } catch (error) {
        res.status(500).json({ message: error })
    }
}
//Get Users
export const getuser = async (req, res) => {
    try {
        const getuser = await User.find()
        return res.status(200).json({ getuser })
    } catch (error) {
        console.log(error)
    }
}
//Get User by ID
export const getuserbyId = async (req, res) => {
    const { _id } = req.params;
    try {
        const getuser = await User.findById(req.params._id)
        return res.status(200).json({ getuser })
    } catch (error) {
        console.log(error)
    }
}
//Update User
export const updateuser = async (req, res) => {
    const { _id } = req.params;
    try {
        const updateuser = await User.findByIdAndUpdate({ _id }, { $set: req.body }, { new: true })
        return res.status(200).json({ updateuser, message: "updated user" })
    } catch (error) {
        console.log(error)

    }
}
//Delete User
export const deleteuser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params._id)
        res.status(500).json({ message: "user deleted sucessfully" })
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" })
    }
}
//Users with filters
export const filteruser = async (req, res) => {
    const { keyword } = req.body
    try {
        const getuser = await User.find({ $or: [{ 'firstname': keyword }, { 'lastname': keyword }, { 'email': keyword }, { 'phone': keyword }] })
        return res.status(200).json({ getuser })
    } catch (error) {
        console.log(error)
    }
}




