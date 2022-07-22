const express = require('express')
const router = express.Router()
const Controller = require('../controllers/ControllerAgeGate')

//funcion ageGate
router.get('/:date_user/:age_limit', Controller.getAgeGate)

module.exports = router