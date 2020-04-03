const User = require('../models/users')
const config = require('../config/config')
const jwt = require('jsonwebtoken')
const bcryptionUtil = require('../utils/bcryption')

function signUser(payLoad) {
    return jwt.sign(payLoad.toObject(), config.authentication.jwtSecret, { expiresIn: config.authentication.TTL });
}

module.exports = {
    async register(req, res) {
        try {
            const userData = req.body;
            // match user in db
            const findUser = await User.findOne({ email: userData.email })
            if (!findUser) {
                userData.password = await bcryptionUtil.encryptPassword(userData.password)
                let user = new User(userData).save((error, user) => {
                    if (error) {
                        console.log(error)
                    } else {
                        const token = signUser(user)
                        res.status(200).send({ _id: user._id, email: user.email, token: token })
                    }
                })
            } else {
                res.status(403).send({ message: 'User Already Exists' })
            }
        } catch (error) {
            console.log(error);
            res.status(400).send(error);
        }
    },
    async login(req, res) {
        const { email, password } = req.body
        try {
            const user = await User.findOne({ email: email })
            if (user) {
                const match = await bcryptionUtil.decryptPassword(password, user.password);
                if (match) {
                    // sign jsonwebtoken to verify routes later
                    const token = signUser(user)
                    payLoad = user.toObject()
                    payLoad.token = token
                    res.status(200).send(payLoad)
                } else {
                    res.status(404).send('Invalid Password')
                }
            } else {
                res.status(404).send('Invalid Email')
            }
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }
}