const {Router} = require('express');
const {createUser, listAllUsers} = require('../controller/user.controller');
const {body} = require('express-validator');
const {validateFields} = require('../middlewares/validateFields');
const { validateExistingEmail } = require('../helpers/validateExistingEmail.helpers');
const route = Router();

route.post("/register", [
    body('email').isEmail().withMessage("Invalid email").notEmpty().withMessage('Email required').custom(validateExistingEmail), body('password').notEmpty().withMessage("Password required").matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, "i").withMessage('Password should be combination of one uppercase, one lower case, one special char, one digit and min 8 char long'),
    validateFields
], createUser);

route.get("/list", listAllUsers);

module.exports = route;
