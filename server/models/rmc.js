const Sequelize = require('sequelize');

module.exports = class Rmc extends Sequelize.Model {
    static init(sequelize){
        return super.init({
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true,
            },
            title: {
                type: Sequelize.STRING(45),
                allowNull: false,
            },
            content: {
                type: Sequelize.BLOB,
                allowNull: true,
            },
            writer_id: {
                type: Sequelize.STRING(45),
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
    static associate(db) {}
};