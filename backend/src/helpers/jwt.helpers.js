const jwt = require("jsonwebtoken")

const generateToken = async(payload) => {
    try {
        return jwt.sign(payload,process.env.PRIVATE_KEY,{expiresIn: "24h"})
    } catch (error) {
        throw new Error("The token could not be generated")
    }
}

module.exports = {generateToken}