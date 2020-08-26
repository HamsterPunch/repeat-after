const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class User extends Model {
    static init(sequelize) {
        return super.init({
            email: {
                type : DataTypes.STRING(40),
                allowNull : false,
                unique : true
            },
            password: {
                type : DataTypes.STRING(100),
                allowNull : false
            },
            nickname: {
                type : DataTypes.STRING(20),
                allowNull : false
            },
            image: {
                type : DataTypes.STRING(200),
                allowNull : true
            },
            role: {
                type : DataTypes.STRING(30),
                allowNull : false
            }
        }, {
            modelName: 'User',
            tableName: 'users',
            charset: 'utf8',
            collate: 'utf8_general_ci',
            sequelize
        });
    }
    static associate(db) {
        db.User.hasMany(db.Comment);
        db.User.belongsToMany(db.Post, { through: 'Like', as: 'Liked' });
    }
};