const { database } = require("../config/database.config")
const Sequelize = require("sequelize")
const { Model } = require("sequelize")

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