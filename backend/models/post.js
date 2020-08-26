const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class Post extends Model {
    static init(sequelize) {
        return super.init({
            title: {
                type: DataTypes.STRING(100),
                allowNull: false
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            video_src: {
                type: DataTypes.STRING(200),
                allowNull: false
            },
            subtitle_kr_src: {
                type: DataTypes.STRING(200),
                allowNull: false
            },
            subtitle_en_src: {
                type: DataTypes.STRING(200),
                allowNull: false
            },
            thumbnail_src: {
                type: DataTypes.STRING(200),
                allowNull: true
            }
        }, {
            modelName: 'Post',
            tableName: 'posts',
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
            sequelize
        });
    }
    static associate(db) {
        db.Post.belongsToMany(db.User, { through: 'Like', as: 'Likers' });
        db.Post.hasMany(db.Comment);
        db.Post.hasMany(db.Line);
    }
};