const { Model, DataTypes } = require('sequelize')
const { db } = require('./index')

class Items extends Model {

}

Items.init({
    code: {
        type: DataTypes.STRING
    },
    name: {
        type: DataTypes.STRING
    },
    desciption: {
        type: DataTypes.STRING
    }
}, {
    modelName: 'Items',
    tableName: 'items',
    sequelize: db,
    timestamps: true,
    underscored: false
})

module.exports = Items