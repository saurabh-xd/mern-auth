import userModel from "../models/user.model.js";

export const getUserData = async(req,res)=>{

    try {
        const userId = req.userId;

         if(!userId){
            return res.json({success: false, message: 'user not found'})

        } 


        const user = await userModel.findById(userId);

       
        res.json({
            success: true,
            userData: {
                name: user.name,
                isAccountVerified: user.isAccountVerified
            }
        })


    } catch (error) {
        res.json({success: false, message: "error.message"});
    }

}