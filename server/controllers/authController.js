const bcrypt = require('bcryptjs')
const User = require('../models/userModels')
const jwt = require("jsonwebtoken");
// Registration User
exports.signup = async (req, res, next) => {
    try {
        const user = await User.findOne({email: req.body.email})
        if(user){
            return next(new createError('User already exist!',400))
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 12)

        const newUser = await User.create({
            ...req.body,
            password: hashedPassword,
        })
        // Assign JWt to user
        const token = jwt.sign({ _id: newUser._id}, 'secretkey123', {
            expiresIn: '90d',
        })

        res.status(201).json({
            status:'success',
            message: 'User registered successfully',
            token,
        })
    } catch (error){
        next(error)
    }
}

//logging user
exports.login = async (req, res, next) => {}