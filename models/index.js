const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
});

//ORM [Object Relational Mapping] as Sequelize ORM -> NodeJS ORM for Postgres
//Sequelize: ORM for interacting with the PostgreSQL database
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Product = require('./product')(sequelize, Sequelize);

module.exports = db;
