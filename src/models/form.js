const { database } = require("../config/database.config")
const Sequelize = require("sequelize")
const { Model } = require("sequelize")

class Form extends Model{

}

Form.init({
    uuid: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
        get() {
            const rawValue = this.getDataValue(uuid);
            return rawValue
        }
    },
    type: {
        type: Sequelize.STRING,
        allowNull: false
    },
    land:{
        type: Sequelize.STRING,
        allowNull: false
    },
    timefrom:{
        type: Sequelize.DATE,
        allowNull: true
    },
    timeto:{
        type: Sequelize.DATE,
        allowNull: false
    },
    option: {
        type: Sequelize.STRING,
        allowNull: true
    },
    attr: {
        type: Sequelize.STRING,
        allowNull: false
    }
},{
    sequelize: database,
    modelName:"form"
})

module.exports.Form = Form