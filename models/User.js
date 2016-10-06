// Creates table for users

module.exports = function(sequelize, DataTypes) {
	var User = sequelize.define('User', {
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING
		}
	}
	// {
	// 	classMethods: {
	// 		associate: function(models) {
	// 			User.hasMany(models.Burger);
	// 		}
	// 	}
	// }
	);

	return User;
};