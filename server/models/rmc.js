const Sequelize = require('sequelize');

module.exports = class Rmc extends Sequelize.Model {
    static init(sequelize){
        return super.init({
            title: {
                type: Sequelize.STRING(45),
                allowNull: false,
            },
            content: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            video_src: {
                type: Sequelize.STRING(45),
                allowNull: true,
            },
            create_date: {
                type: Sequelize.DATE,
                allowNull: true,
                defaultValue: Sequelize.NOW,
            },
            user_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
        }, {
            sequelize,
            timestamps: true,
            modelName: 'Rmc',
            tableName: 'rmc',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associate(db) {
        db.Rmc.hasMany(db.Rmc_board, {foreignKey: 'rmc_id', sourceKey: 'id'});
        db.Rmc.belongsTo(db.User, {foreignKey: 'writer_id', targetKey: 'id'});
    }
};