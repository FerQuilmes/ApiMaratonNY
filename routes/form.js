const express = require('express')
const router = express.Router()
const Controller = require('../controllers/ControllerForm')

//agrega formulario minivacaciones
router.post('/maratonNY', Controller.addForm)

module.exports = router
