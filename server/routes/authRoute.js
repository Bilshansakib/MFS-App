const express = require('express')
const authController = require('../controllers/authController')
const cors = require('cors')
// const { test } = require('../controllers/authController')
const router = express.Router();



router.use(cors({
    credentials: true,
    origin: "http://localhost:5173"
}))

// router.get('/',test)
// router.post('register', authController.registerUser)
router.post('/signup', authController.signup)
router.post('/register', authController.signup)

router.post('/login', authController.login)



module.exports = router;