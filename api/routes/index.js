const express = require('express')
const router = express.Router()
const { ensureAuth, ensureGuest } = require('../middleware/auth')
const Transaction = require('../models/Transactions')
const Currency = require('../models/Currencies')

/**
 * @desc Login/Landing page
 * @route GET /
 */
router.get('/', ensureGuest, (req, res) => {
    res.render('login', {
        layout: 'login'
    })
})