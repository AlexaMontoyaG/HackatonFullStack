const {Router} = require("express")
const {check} = require("express-validator")
const {login} = require("../controller/auth.controller")
const { validateFields } = require("../middlewares/validateFields")
const { validateUser } = require("../middlewares/validations")
const route = Router()

route.post("/login", [
    check("email").notEmpty().withMessage("Email required"), check("password", "Password required").notEmpty(),validateFields,validateUser
], login)

module.exports = route
