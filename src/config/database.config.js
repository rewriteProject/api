const { Sequelize } = require('sequelize');

const database_user = process.env.DATABASE_USER;
const database_host = process.env.DATABASE_HOST;
const database_password = process.env.DATABASE_PASSWORD;

const sequelize = new Sequelize('Logistics', database_user, database_password, {
    host: database_host,
    dialect: 'mysql'
  });

module.exports.database = sequelize