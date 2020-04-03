const Events = require('../models/events')
module.exports = {
    async getEvents(req, res) {
        try {
            const data = await Events.find()
            res.send(data)
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    },
    async saveEvent(req, res) {
        try {
            const user = req.session.user
            const postedBody = req.body
            postedBody.userId = user._id
            const savedEvent = await new Events(postedBody).save()
            res.status(201).send(savedEvent)
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    },
    async getUserEvent(req, res) {
        try {
            const user = req.session.user
            if (user) {
                const data = await Events.find({ userId: user._id })
                res.send(data)
            } else {
                res.status(403).send({ message: 'Invalid Parameters' })
            }
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }
}