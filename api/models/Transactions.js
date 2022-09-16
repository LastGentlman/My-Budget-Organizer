const { DataTypes } = require('sequelize')

module.exports = sequelize => {
    sequelize.define('Transaction', {
        id: {
            type: DataTypes.UUID,
            autoincrement: true,
            primaryKey: true,
            unique: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4
        },
        amount: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                min: 0.01,
                isFloat: true
            }
        },
        transactionType: {
            type: DataTypes.ENUM('income', 'expense'),
            defaultValue: 'expense',
            allowNull: false,
        },
        transactionDate: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW(),
            // validate: { // FIXME: This validation is not working
            //     isBefore: DataTypes.literal("NOW() + INTERVAL '1 day'"),
            //     isAfter: DataTypes.literal("NOW() - INTERVAL '30 day'")
            // }
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // photo: {
        //     //TODO: Add photo validation in v2.0
        // },
        own_by: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'Users',
                key: 'googleId'
            }
        }
    })
}