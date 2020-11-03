const models = require('../../models');

exports.list = async (req, res, next) => {
  const query = req.query;
  const user = (query['user'] === undefined) ? {} : {nickname: query['user']};
  const label = (query['label'] === undefined) ? {} : {name: query['label']};
  const milestone = (query['milestone'] === undefined) ? {} : {title: query['milestone']};
  const isopen = (query['isopen'] === undefined) ? {} : {is_open: query['isopen']};
  const assignee = (query['assignee'] === undefined) ? {} : {nickname: query['assignee']};
  const mention = (query['mention'] === undefined) ? {} : {author_id: query['mention']};

  try {
    const issues = await models.Issue.findAll({
      attributes: ['id', 'title', 'description', 'createdAt', 'updatedAt'],
      where: isopen,
      include: [
        {
          model: models.User,
          attributes: ['id', 'nickname'],
          where: user
        },
        {
          model: models.IssueLabel,
          attributes: ['id'],
          include: [
            {
              model: models.Label,
              where: label,
              attributes: ['id', 'name', 'color_code']
            }
          ],
        },
        {
          model: models.IssueAssignee,
          attributes: ['id'],
          include: [
            {
              model: models.User,
              attributes: ['nickname'],
              where: assignee
            }
          ]
        },
        {
          model: models.Milestone,
          attributes: ['id', 'title'],
          where: milestone,
          required: false
        },
        {
          model: models.Comment,
          attritbutes: ['id', 'issue_id'],
          include: [
            {
              model: models.User,
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