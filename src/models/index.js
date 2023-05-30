const dbConfig = require('../config/database')
const env = process.env.NODE_ENV || 'development'

const Sequelize = require('sequelize')
const sequelize = new Sequelize(dbConfig[env].database, dbConfig[env].username, dbConfig[env].password, {
    host: dbConfig[env].hostname,
    dialect: dbConfig[env].dialect,
    pool: {
        max: dbConfig[env].max,
        min: dbConfig[env].min,
        acquire: dbConfig[env].acquire,
        idle: dbConfig[env].idle
    }
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

// import models

module.exports = db