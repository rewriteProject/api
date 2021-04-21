const { database } = require("../config/database.config")
const Sequelize = require("sequelize")
const { Model } = require("sequelize")


const type = req.body.infotype;
const land = req.body.country;
const time = req.body.time;
const option = req.body.option;

// Hier muss dann das Schema für die UDB erstellt werden um später aufgerufen werden zu können
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

class User extends Model{

}

User.init({
    id_user: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: true
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false
    },
    password:{
        type: Sequelize.String,
        allowNull: false
    }
},{
    sequelize: database,
    modelName:"user"
})

module.exports.User = User



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
    modelName:"anal"
})

module.exports.Analytics = Analytics