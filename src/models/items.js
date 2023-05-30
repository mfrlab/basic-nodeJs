module.exports = (sequelize, Sequelize) => {
    const items = sequelize.define("items", {
        code: {
            type: Sequelize.STRING
        },
        name: {
            type: Sequelize.STRING
        },
        desciption: {
            type: Sequelize.STRING
        }
    })

    return items
}