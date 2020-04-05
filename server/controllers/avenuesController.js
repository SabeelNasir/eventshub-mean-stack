const config = require('../config/config')
const { Avenues } = require('../models/avenues')

module.exports = {
    async saveAvenue(req, res) {
        try {
            const user = req.session.user
            const postedBody = req.body
            postedBody.createdBy = user._id;
            postedBody.createdAt = Date();
            const savedEvent = await new Avenues(postedBody).save()
            res.status(201).send(savedEvent)
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    },
    async updateAvenue(req, res) {
        try {
            const user = req.session.user
            const postedBody = req.body
            postedBody.updatedBy = user._id;
            postedBody.updatedAt = Date();
            const data = await Avenues.update({ _id: postedBody._id }, postedBody)
            res.status(200).send(data)
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    },
    async getAvenues(req, res) {
        try {
            let data = []
            const { id } = req.params
            if (id) {
                data = await Avenues.find({ _id: id })
            } else {
                data = await Avenues.find()
            }
            res.send(data)
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }
}