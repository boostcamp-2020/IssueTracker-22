module.exports = (sequelize, DataTypes) => sequelize.define('issue_label', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  issue_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  label_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, { freezeTableName: true, underscored: true });
