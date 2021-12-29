const {response, request} = require("express")
const userModel = require("../models/user.model")

const validateUser = async (req=request,res=response, next) => {
    try {
        const {email} = req.body
        const user = await userModel.findOne({email})
        if(!user || !user.status){
            return res.status(400).json({ok: false, status: 400, message: "User or password are incorrect"})
        }
        req.body.user = user
    } catch (error) {
        res.status(500).json({ok: false, status: 500, message: error.message})
    }
    next()
}

module.exports = {validateUser}