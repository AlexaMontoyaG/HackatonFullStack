const {Schema, model} = require("mongoose")

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    admin: {
        type: Boolean,
        required: true,
        default: false
    },
    password: {
        type: String,
        min: 8,
        required: true
    },
    status: {
        type: Boolean,
        required: true,
        default: true
    }
}, {timestamps: true})

userSchema.methods.toJSON = function () {
    const {__v, password, ...user} = this.toObject()
    return user
}

module.exports = model('user', userSchema)
