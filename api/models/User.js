const { DataTypes } = require('sequelize')

module.exports = sequelize => {
    sequelize.define('User', {
        googleId: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        displayName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        profilePic: {
            type: DataTypes.STRING,
            validate: {
                isUrl: true
            }
        },
        email: {
            type: DataTypes.STRING,
            // allowNull: false,
            validate: {
                isEmail: true
            }
        },
        createdAt: {
            type: DataTypes.DATE,
            default: DataTypes.NOW(),
            allowNull: false
        }
    })
}