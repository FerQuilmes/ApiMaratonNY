const express = require('express')
require('dotenv').config({ path: './.env' })
const cors = require('cors')
const { db } = require('./db')
const ageGate = require('./routes/ageGate')
const form = require('./routes/form')

//configuraciones
const app = express()
db.connect(function (err) {
  if (err) {
    console.log('error DB.. enviroment')
    console.log(process.env.DATABASE_HOST,process.env.DATABASE_USER,process.env.DATABASE_PASSWORD,process.env.DATABASE)
    console.error('error connecting: ' + err.stack)
    return
  }
  
  console.log('connected to DB minivacaciones')
})

//Setings PORT
app.set('port', process.env.PORT || 3001)

// Enable CORS
app.use(
  cors({
    credentials: true,
    origin: '*',
    allowedHeaders:
      'Origin, X-Requested-With, Content-Type, X-Auth-Token, X-PINGOTHER, Accept',
    methods: 'GET,HEAD,PUT,PATCH,OPTIONS,POST,DELETE',
  })
)

// Enable JSON use
app.use(
  express.urlencoded({
    extended: true,
  })
)
app.use(express.json())

/**
 * Routes - Public
 */
app.use('/ageGate', ageGate)
app.use('/form', form)

const server = app.listen(app.get('port'), () => {
  console.log(`Server running on port ${app.get('port')}`)
})

module.exports = { app, server }
