const { request, response } = require("express");
const { validatePassword } = require("../helpers/Auth.helpers");
const { generateToken } = require("../helpers/jwt.helpers");

const login = async (req=request, res=response) => {
    try {
        const {user, password} = req.body
        const verifyPassword = await validatePassword(password,user.password)
        if(verifyPassword){
            const payload = {id: user._id, name: user.name, email: user.email, admin: user.admin}
            const token = await generateToken(payload)
            res.status(200).json({ok: true, status: 200, token})
        }
        else{
            return res.status(400).json({ok: false, status: 400, message: "User or password are incorrect"})
        }
    } catch (error) {
        res.status(500).json({ok: false, status: 500, message: error.message})
    }
}

module.exports = {login}