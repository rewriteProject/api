const { Sequelize } = require('sequelize');

// Hier noch die Parameter ändern damit Sie Chris seiner Datenbank passen
// Das soll hier die Verbindung der UDB werden
const sequelize = new Sequelize('user', 'root', '7BHipTjov1k5S8LiefJs9', {
    host: 'rewrite-project.net',
    dialect: 'mysql'
  });

module.exports.database = sequelize