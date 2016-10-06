"use strict";

const models = require('../models');

const sequelizeConnection = models.sequelize;

//Set foreign key check to 0 to drop tables that use foreign keys
sequelizeConnection.query('SET FOREIGN_KEY_CHECKS = 0')

//Drop tables on connection
.then(function() {
	return sequelizeConnection.sync({ force: true });
})

//Create a burger entry and enter user into Users database
.then(function() {
	return models.Burger.create(
	{
		name: 'Mondo Burger',
		User: {
			name: 'Reuben'
		}
	},
	{
		include: [models.User]
	});
})

.then(function() {
	return models.Burger.create(
	{
		name: 'The Mother Burger',
		User: {
			name: 'Cap'
		}
	},
	{
		include: [models.User]
	})
})

.then(function() {
	console.log('complete');
});

