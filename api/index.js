const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const methodOverride = require('method-override')
const passport = require('passport')
const session = require('express-session')
const { db } = require('./config/db')

// Loading env config
dotenv.config({path: './config/config.env'})

const server = express()

const PORT = process.env.PORT || 3001

server.listen(
    PORT, () => {
        console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
        db.sync({ force: true })
    }
)