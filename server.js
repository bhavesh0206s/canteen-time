const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const connectDB = require('./config/db')

connectDB()

const app = express()

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

require('./routes/auth/login')(app)
require('./routes/auth/signup')(app)
require('./routes/forumPost')(app)
require('./routes/classRoomRoutes')(app)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log('port running')
})
