const { DataTypes } = require('sequelize');

function defineCar( sequelize ) {
    sequelize.define('car', {
        //Model attributes are defined here
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        marca: {
            type: DataTypes.STRING,
            allowNull: false
        },
        linea:{
            type: DataTypes.STRING,
            allowNull: false
        },
        modelo:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        color:{
            type: DataTypes.STRING,
            allowNull: false
        },
        compra:{
            type: DataTypes.DATE,
            allowNull: false
        },
    }, {
        //Other model options go here
        timestamps: false
    });
}

module.exports = defineCar;