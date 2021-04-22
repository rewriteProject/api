const { database } = require("../config/database.config")
const Sequelize = require("sequelize")
const { Model } = require("sequelize")

class Analytics extends Model{

}

Analytics.init({
    id_user: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    id_result: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    type_analytics:{
        type: Sequelize.STRING,
        allowNull: false
    },
    result:{
        type: Sequelize.STRING,
        allowNull: true
    }
},{
    sequelize: database,
    modelName:"analyse"
})

module.exports.Analytics = Analytics