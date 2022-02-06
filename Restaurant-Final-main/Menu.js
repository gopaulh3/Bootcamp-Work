const {sequelize, DataTypes, Model} = require('./sequelize_index');
const MenuItem = require('./MenuItem');

class Menu extends Model {}

Menu.init({
    title: DataTypes.STRING,
    restaurant_id: DataTypes.INTEGER,
}, {
    sequelize,
    timestamps: false,
});

Menu.hasMany(MenuItem, {as: 'MenuItem', foreignKey: 'menu_id'});
MenuItem.belongsTo(Menu, {foreignKey: 'menu_id'});

module.exports = Menu;