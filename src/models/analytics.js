const { database } = require("../config/database.config")
const Sequelize = require("sequelize")
const { Model } = require("sequelize")

class Analytics extends Model{

}

Analytics.init({
    id_user: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    id_result: {
        type: Sequelize.STRING,
        autoIncrement: true,
        primaryKey: true
    },
    type_analytics:{
        type: Sequelize.STRING,
        autoIncrement: true,
        allowNull: false
    },
    result:{
        type: Sequelize.DATE,
        autoIncrement: true,
        allowNull: true
    }
},{
    sequelize: database,
    modelName:"analyse"
})

module.exports.Analytics = Analytics