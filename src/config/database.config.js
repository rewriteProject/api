const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('Logistics', 'root', '7BHipTjov1k5S8LiefJs9', {
    host: 'rewrite-project.net',
    dialect: 'mysql'
  });

module.exports.database = sequelize