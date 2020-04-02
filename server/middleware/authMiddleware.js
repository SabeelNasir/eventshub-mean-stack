const jwt = require('jsonwebtoken')
const config = require('../config/config')
const { kUnauthorized } = require('../constants/constants')

module.exports = (req, res, next) => {
    const bearerToken = req.headers['authorization']
    try {
        if (typeof bearerToken != "undefined") {
            const token = bearerToken.split(' ')
            if (token) {
                req.token = token
                jwt.verify(token, config.authentication.jwtSecret, (error, user) => {
                    if (!error) {
                        throw new Error(error)
                    }
                    next()
                })
            } else {
                throw new Error()
            }
        } else {
            throw new Error()
        }
    } catch (error) {
        res.status(401).send({
            error: kUnauthorized
        })
    }
}