const { Milestone, Issue, sequelize } = require('../../models');
const asyncHandler = require('../../lib/asyncHandler');

exports.list = asyncHandler(async (req, res, next) => {
  const milestones = await Milestone.findAll({
    attributes: [
      'id', 'title', 'description', 'due_date',
      [sequelize.literal('SUM(issues.is_open)'), 'open_issues'],
      [sequelize.literal('SUM(issues.is_open=0)'), 'closed_issues'],
      [sequelize.literal('SUM(issues.is_open=0)/COUNT(*)'), 'progress'],
    ],
    include: [{
      model: Issue,
      attributes: [],
    }],
    group: ['milestone.id', 'milestone.title', 'milestone.description', 'milestone.due_date'],
  });
  return res.json({
    success: true,
    content: { milestones },
  });
});

exports.create = asyncHandler(async (req, res, next) => {
  const { title, description, due_date } = req.body;

  const newMilestones = await Milestone.create({
    title, description, due_date,
  });
  return res.json({
    success: true,
    content: { id: newMilestones.id },
  });
});
