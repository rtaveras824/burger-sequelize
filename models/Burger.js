// Creates table for burgers entered in website

module.exports = function(sequelize, DataTypes) {
	var Burger = sequelize.define('Burger', {
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING
		}
	},
	{
		classMethods: {
			associate: function(models) {
				Burger.belongsTo(models.User);
			}
		}
	});

	return Burger;
};