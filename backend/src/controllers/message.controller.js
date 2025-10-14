import User from "../models/user.model.js";

export const getUsersForSidebar = async(req, res) => {
    try {
         const loggedInUser = req.user._id;
         const filteredUsers = await User.find({ _id: { $ne: loggedInUser } });

         res.status(200).json(filteredUsers);
    } catch (error) {
        console.log("Error in getUsersForSidebar controller",error.message);
        res.status(500).json({ error: "Internal Server Error" });
        
    }
}

export const getMessages = async (req,res)=>{
    try {
        const {id:userToChatId} = req.params
        const senderId = req.user._id
    } catch (error) {
        
    }
}