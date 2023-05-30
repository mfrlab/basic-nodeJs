const { db, Items } = require('../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

exports.getItems = async function (req, res) {
    const items = await Items.findAll()

    return res.status(200).json(items)
}