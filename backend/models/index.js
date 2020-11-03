const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/db.config')[env];

const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require('./user')(sequelize, Sequelize);
db.Issue = require('./issue')(sequelize, Sequelize);
db.Comment = require('./comment')(sequelize, Sequelize);
db.Milestone = require('./milestone')(sequelize, Sequelize);
db.Label = require('./label')(sequelize, Sequelize);
db.IssueLabel = require('./issue_label')(sequelize, Sequelize);
db.IssueAssignee = require('./issue_assignee')(sequelize, Sequelize);

db.User.hasMany(db.Issue, { foreignKey: 'author_id', sourceKey: 'id' });
db.Issue.belongsTo(db.User, {foreignKey: 'author_id'});

db.User.hasMany(db.Comment, { foreignKey: 'author_id', sourceKey: 'id' });
db.User.hasMany(db.IssueAssignee, { foreignKey: 'assignee_id', sourceKey: 'id' });
db.IssueAssignee.belongsTo(db.User, {foreignKey: 'assignee_id'});

db.Issue.hasMany(db.Comment, { foreignKey: 'issue_id', sourceKey: 'id' });
db.Issue.hasMany(db.IssueLabel, { foreignKey: 'issue_id', sourceKey: 'id' });
db.Issue.hasMany(db.IssueAssignee, { foreignKey: 'issue_id', sourceKey: 'id' });

db.Label.hasMany(db.IssueLabel, { foreignKey: 'label_id', sourceKey: 'id' });
db.IssueLabel.belongsTo(db.Label, {foreignKey: 'label_id'});

db.Milestone.hasMany(db.Issue, { foreignKey: 'milestone_id', sourceKey: 'id' });
db.Issue.belongsTo(db.Milestone, {foreignKey: 'milestone_id'});

module.exports = db;
