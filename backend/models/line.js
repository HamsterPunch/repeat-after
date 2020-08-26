const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class Line extends Model {
    static init(sequelize) {
        return super.init({
            audio_src: {
                type: DataTypes.STRING(200),
                allowNull: false
            },
            subtitle_kr: {
                type: DataTypes.STRING(200),
                allowNull: false
            },
            subtitle_en: {
                type: DataTypes.STRING(200),
                allowNull: false
            },
            description: {
                type : DataTypes.TEXT,
                allowNull : false
            },
            order: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
            // PostId
        }, {
            modelName: 'Line',
            tableName: 'lines',
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
            sequelize
        });
    }
    static associate(db) {
        db.Line.belongsTo(db.Post);
    }
};