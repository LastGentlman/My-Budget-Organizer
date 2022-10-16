const { DataTypes } = require('sequelize')

module.exports = sequelize => {
    sequelize.define('Currency', {
        id: {
            type: DataTypes.UUID,
            autoincrement: true,
            primaryKey: true,
            unique: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        symbol: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        rate: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                min: 0.01,
                isFloat: true
            }
        }
    })
}