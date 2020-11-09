module.exports = (sequelize, DataTypes) => sequelize.define('milestone', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  due_date: {
    type: DataTypes.DATE,
  },
  is_open: {
    type: DataTypes.TINYINT(1),
    allowNull: false,
    defaultValue: 1,
  },
}, { paranoid: true, freezeTableName: true, underscored: true });
