import { DataTypes } from 'sequelize';
import DATABASE from '../lib/database.js';

const AutoReact = DATABASE.define(
	'AReact',
	{
		status: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: false,
		},
	},
	{
		tableName: 'areact',
		timestamps: false,
	},
);

export default AutoReact;