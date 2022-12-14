const GoogleStrategy = require('passport-google-oauth20')
const sequelize = require('sequelize')
const User = require('../models/User.js')

module.exports = function(passport) {
    passport.use(
        new GoogleStrategy(
            {
                clientID: process.env.GOOGLE_CLIENT_ID,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET,
                callbackURL: '/auth/google/callback'
            },
            async (accessToken, refreshToken, profile, callback) => {
                const newUser = {
                    googleId: profile.id,
                    displayName: profile.displayName,
                    firstName: profile.name.givenName,
                    lastName: profile.name.familyName,
                    image: profile.photos[0].value
                }

                try {
                    let user = await User.findOne({ googleId: profile.id })
                    if (user) {
                        callback(null, user)
                    } else {
                        user = await User.create(newUser)
                        callback(null, user)
                    }
                } catch (error) {
                    console.error(error)
                }
            }
        )
    )

    passport.serializeUser((user, callback) => {
        callback(null, user.id)
    })

    passport.deserializeUser((id, callback) => {
        User.findById(id, (err, user) => callback(err, user))
    })
}