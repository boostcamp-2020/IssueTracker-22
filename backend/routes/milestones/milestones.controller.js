const { Milestone, Issue } = require('../../models');

exports.list = async (req, res) => {
  try {
    const milestones = await Milestone.findAll({
      attributes: ['id', 'title', 'description', 'due_date'],
      include: [{
        model: Issue,
        attributes: ['id', 'is_open'],
      }],
    });
    return res.json({
      success: true,
      content: { milestones },
    });
  } catch (err) {
    res.status(500).json({ success: false, message: 'DB Error' });
  }
};
