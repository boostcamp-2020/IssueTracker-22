const {
  Issue, 
  User, 
  IssueLabel, 
  Label, 
  IssueAssignee, 
  Milestone, 
  Comment} = require('../../models');

exports.list = async (req, res) => {
  const { 
    user, 
    label, 
    milestone, 
    isopen, 
    assignee, 
    mention 
  } = req.query;
  const filterUser = (user === undefined) ? {} : {nickname: user};
  const filterLabel = (label === undefined) ? {} : {name: label};
  const filterMilestone = (milestone === undefined) ? {} : {title: milestone};
  const filterIsopen = (isopen === undefined) ? {} : {is_open: isopen};
  const filterAssignee = (assignee === undefined) ? {} : {nickname: assignee};
  const filterMention = (mention === undefined) ? {} : {author_id: mention};
  console.log(isopen);
  try {
    const issues = await Issue.findAll({
      attributes: ['id', 'title', 'description', 'createdAt', 'updatedAt'],
      where: filterIsopen,
      include: [
        {
          model: User,
          attributes: ['id', 'nickname'],
          where: filterUser
        },
        {
          model: IssueLabel,
          attributes: ['id'],
          include: [
            {
              model: Label,
              where: filterLabel,
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
              where: filterAssignee
            }
          ]
        },
        {
          model: Milestone,
          attributes: ['id', 'title'],
          where: filterMilestone,
          required: false
        },
        {
          model: Comment,
          attritbutes: ['id', 'issue_id'],
          include: [
            {
              model: User,
              where: filterMention,
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