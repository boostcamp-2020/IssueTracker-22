const {
  Issue,
  User,
  IssueLabel,
  Label,
  IssueAssignee,
  Milestone,
  Comment,
} = require('../../models');
const milestone = require('../../models/milestone');

exports.list = async (req, res) => {
  const {
    user,
    label,
    milestone,
    isopen,
    assignee,
    mention,
  } = req.query;
  const filterUser = (user === undefined) ? {} : { nickname: user };
  const filterLabel = (label === undefined) ? {} : { name: label };
  const filterMilestone = (milestone === undefined) ? {} : { title: milestone };
  const filterIsopen = (isopen === undefined) ? {} : { is_open: isopen };
  const filterAssignee = (assignee === undefined) ? {} : { nickname: assignee };
  const filterMention = (mention === undefined) ? {} : { author_id: mention };
  try {
    const issues = await Issue.findAll({
      attributes: ['id', 'title', 'description', 'createdAt', 'updatedAt'],
      where: filterIsopen,
      include: [
        {
          model: User,
          attributes: ['id', 'nickname'],
          where: filterUser,
        },
        {
          model: IssueLabel,
          attributes: ['id'],
          include: [
            {
              model: Label,
              where: filterLabel,
              attributes: ['id', 'name', 'color_code'],
            },
          ],
        },
        {
          model: IssueAssignee,
          attributes: ['id'],
          include: [
            {
              model: User,
              attributes: ['profile_url'],
              where: filterAssignee,
            },
          ],
        },
        {
          model: Milestone,
          attributes: ['id', 'title'],
          where: filterMilestone,
          required: false,
        },
        {
          model: Comment,
          attritbutes: ['id', 'issue_id'],
          include: [
            {
              model: User,
              where: filterMention,
              attributes: ['id'],
            },
          ],
        },
      ],
    });
    res.json({ success: true, content: { issues } });
  } catch (err) {
    res.status(400).json({ success: false, message: 'Fail: Get Issue-List' });
  }
};

exports.detail = async (req, res) => {
  const { issueNumber } = req.params;
  const hasIssueNumber = { id: issueNumber };
  try {
    const issues = await Issue.findAll({
      attributes: ['id', 'title', 'description', 'createdAt', 'updatedAt'],
      where: hasIssueNumber,
      include: [{
        model: User,
        attributes: ['id', 'nickname', 'profile_url'],
      }, {
        model: Comment,
        attributes: ['id', 'description', 'author_id'],
        include: [{
          model: User,
          attributes: ['id', 'nickname', 'profile_url'],
        }],
      }, {
        model: Milestone,
        attributes: ['id', 'title'],
      }, {
        model: IssueLabel,
        attributes: ['id'],
        include: [{
          model: Label,
          attributes: ['id', 'name', 'color_code'],
        }],
      }, {
        model: IssueAssignee,
        attributes: ['id'],
        include: [{
          model: User,
          attributes: ['id', 'nickname', 'profile_url'],
        }],
      },

      ],

    });

    res.json({ success: true, content: { issues } });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Fail: Get Issue Detail' });
  }
}
    
exports.create = async (req, res) => {
  const {
    title, description, assignee_id, label_id, milestone_id,
  } = req.body;
  const { user } = res.locals;

  try {
    const newIssues = await Issue.create({
      title, description, author_id: user.id, assignee_id, label_id, milestone_id,
    });
    if (assignee_id) {
      await IssueAssignee.create({
        issue_id: newIssues.id, assignee_id,
      });
    }
    if (label_id) {
      await IssueLabel.create({
        issue_id: newIssues.id, label_id,
      });
    }

    return res.json({
      success: true,
      content: { id: newIssues.id },
    });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Internel Server Error' });
  }
};
