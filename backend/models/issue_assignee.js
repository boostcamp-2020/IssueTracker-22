module.exports = (sequelize, DataTypes) => sequelize.define('issue_assignee', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  issue_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  assignee_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, { freezeTableName: true, underscored: true });
