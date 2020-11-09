const { Milestone, Issue, sequelize } = require('../../models');

exports.list = async (req, res) => {
  try {
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
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: 'DB Error' });
  }
};

exports.create = async (req, res) => {
  const { title, description, due_date } = req.body;
  try {
    const newMilestones = await Milestone.create({
      title, description, due_date,
    });
    return res.json({
      success: true,
      content: { id: newMilestones.id },
    });
  } catch (err) {
    res.status(500).json({ success: false, message: 'DB Error' });
  }
};
