const userModel = require("../models/user.model")

const validateExistingEmail = async (email) => {
    const user = await userModel.findOne({email});
    if (user) {
        throw new Error ("Email already registered")
    }
}

module.exports = {validateExistingEmail}
