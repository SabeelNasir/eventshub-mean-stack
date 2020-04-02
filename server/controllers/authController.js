const User = require('../models/users')
const config = require('../config/config')
const jwt = require('jsonwebtoken')

function signUser(payLoad) {
    return jwt.sign(payLoad.toObject(), config.authentication.jwtSecret, { expiresIn: config.authentication.TTL });
}

module.exports = {
    register(req, res) {
        const userData = req.body;
        let user = new User(userData).save((error, user) => {
            if (error) {
                console.log(error)
            } else {
                const token = signUser(user)
                payLoad = user.toObject
                payLoad.token = token
                res.send(payLoad).status(200)
            }
        })
    },
    async login(req, res) {
        const { email, password } = req.body
        try {
            const user = await User.findOne({ email: email })
            if (!user) {
                res.status(401).send('Invalid Email')
            }
            else if (user.password != password) {
                res.status(401).send('Invalid Password')
            }
            // sign jsonwebtoken to verify routes later
            const token = signUser(user)
            payLoad = user.toObject
            payLoad.token = token
            res.status(200).send(payLoad)
        } catch (error) {
            res.status(400).send({ error: error.message })
        }
    }
}