const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const methodOverride = require('method-override')
const passport = require('passport')
const session = require('express-session')
const connectDB = require('./config/db')

// Loading env config
dotenv.config({path: './config/config.env'})

connectDB()

const server = express()