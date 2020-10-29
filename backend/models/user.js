module.exports = (sequelize, DataTypes) => sequelize.define('user', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.STRING(50),
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  nickname: {
    type: DataTypes.STRING(20),
    unique: true,
    allowNull: false,
  },
  profile_url: {
    type: DataTypes.STRING(128),
  },
  account_type: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
}, { paranoid: true, freezeTableName: true, underscored: true });
