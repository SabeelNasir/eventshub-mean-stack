const express = require('express')
const router = express.Router()
const eventsController = require('../controllers/eventsController')
const authController = require('../controllers/authController')
const authMiddleware = require('../middleware/authMiddleware')
const avenuesController = require('../controllers/avenuesController')

const mongoose = require('mongoose')
// const connString = "mongodb+srv://sabeel1:kZiZCUmCzazZclow@cluster0-mf5km.mongodb.net/eventsdb";
const connString = "mongodb://localhost:27017/eventsdb";
mongoose.connect(connString, (error, db) => {
    if (error) {
        console.log(error)
        console.log('DB couldn\'t connect !');
    } else {
        console.log('MongoDB Connected !');
    }
})

router.get('/', (req, res) => {
    res.send('Success')
});
router.post('/register', authController.register)
router.post('/login', authController.login)
router.get('/events', eventsController.getEvents)
router.post('/events', authMiddleware, eventsController.saveEvent)
router.get('/user-events', authMiddleware, eventsController.getUserEvent)
router.get('/special-events', authMiddleware, eventsController.getEvents)
router.post('/save-avenue', authMiddleware, avenuesController.saveAvenue)
router.post('/update-avenue', authMiddleware, avenuesController.updateAvenue)
router.get('/avenues', authMiddleware, avenuesController.getAvenues)
router.get('/avenues/:id', authMiddleware, avenuesController.getAvenues)

module.exports = router