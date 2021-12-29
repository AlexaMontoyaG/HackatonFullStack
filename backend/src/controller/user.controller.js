const {request, response} = require("express");
const userModel = require("../models/user.model");
const {encryptPassword} = require("../helpers/Auth.helpers");
const bcrypt = require("bcrypt");
const { generateToken } = require("../helpers/jwt.helpers");


const createUser = async (req = request, res = response) => {
    const {name, email, admin, password} = req.body;
    try {
        const user = new userModel({name, email, admin, password});
        user.password = await encryptPassword(password)
        await user.save();
        const token = await generateToken({name, email, admin:user.admin, id: user._id})
        res.status(201).json({ok: true, status: 201, user, token})
    } catch (error) {
        res.status(500).json({ok: false, status: 500, message: error.message})
    }
};

const listAllUsers = async (req = request, res = response) => {
    try {
        const users = await userModel.find();
        res.json({ok: true, status: 201, users})
    } catch (error) {
        res.status(500).json({ok: false, status: 500, message: error.message})
    }
}

module.exports = {
    createUser,
    listAllUsers
}
