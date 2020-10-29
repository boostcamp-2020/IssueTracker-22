module.exports = (sequelize, DataTypes) => sequelize.define('label', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  color_code: {
    type: DataTypes.STRING(10),
  },
}, { paranoid: true, freezeTableName: true, underscored: true });
