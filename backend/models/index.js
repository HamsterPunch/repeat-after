const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const sequelize = new Sequelize(
    config.database, config.username, config.password, config
);

const user = require('./user');
const post = require('./post');
const line = require('./line');
const comment = require('./comment');

const db ={};

db.User = user;
db.Post = post;
db.Line = line;
db.Comment = comment;

Object.keys(db).forEach(modelName => {
    db[modelName].init(sequelize);
});
Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;