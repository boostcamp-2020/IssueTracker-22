const {Issue, User, IssueLabel, Label, IssueAssignee, Milestone, Comment} = require('../../models');

exports.list = async (req, res, next) => {
  const query = req.query;
  const user = (query['user'] === undefined) ? {} : {nickname: query['user']};
  const label = (query['label'] === undefined) ? {} : {name: query['label']};
  const milestone = (query['milestone'] === undefined) ? {} : {title: query['milestone']};
  const isopen = (query['isopen'] === undefined) ? {} : {is_open: query['isopen']};
  const assignee = (query['assignee'] === undefined) ? {} : {nickname: query['assignee']};
  const mention = (query['mention'] === undefined) ? {} : {author_id: query['mention']};

  try {
    const issues = await Issue.findAll({
      attributes: ['id', 'title', 'description', 'createdAt', 'updatedAt'],
      where: isopen,
      include: [
        {
          model: User,
          attributes: ['id', 'nickname'],
          where: user
        },
        {
          model: IssueLabel,
          attributes: ['id'],
          include: [
            {
              model: Label,
              where: label,
              attributes: ['id', 'name', 'color_code']
            }
          ],
        },
        {
          model: IssueAssignee,
          attributes: ['id'],
          include: [
            {
              model: User,
              attributes: ['profile_url'],
              where: assignee
            }
          ]
        },
        {
          model: Milestone,
          attributes: ['id', 'title'],
          where: milestone,
          required: false
        },
        {
          model: Comment,
          attritbutes: ['id', 'issue_id'],
          include: [
            {
              model: User,
              where: mention,
              attributes: ['id']
            }
          ],
        }
      ]
    });
    res.json({ success: true, content: { issues } });
  } catch (err) {
    res.status(400).json({ success: false, message: "Fail: Get Issue-List" });
  }
};