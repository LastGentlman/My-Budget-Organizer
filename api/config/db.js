const { Sequelize, Op } = require('sequelize');
const modelUser = require('../models/User')
const modelTransaction = require('../models/Transactions')

const db = new Sequelize("postgres://rodry:1234@localhost:5432/my_budget_admin", {
    logging: false
})

modelUser(db)
modelTransaction(db)

const { User, Transaction } = db.models

User.hasMany(Transaction)
Transaction.belongsTo(User)

//TODO: Add feature of categories in v2.0

module.exports = {
    ...db.models,
    db,
    Op
}