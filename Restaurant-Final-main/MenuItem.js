const {sequelize, DataTypes, Model} = require('./sequelize_index');

class MenuItem extends Model {}

MenuItem.init({
    item: DataTypes.STRING,
    price: DataTypes.INTEGER,
    menu_id: DataTypes.INTEGER,
}, {
    sequelize,
    timestamps: false,
});

module.exports = MenuItem;