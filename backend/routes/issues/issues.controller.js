const asyncHandler = require('../../lib/asyncHandler');
const {
  Issue,
  User,
  IssueLabel,
  Label,
  IssueAssignee,
  Milestone,
  Comment,
} = require('../../models');

exports.list = asyncHandler(async (req, res, next) => {
  const {
    author,
    label,
    milestone,
    isopen,
    assignee,
    mention,
    title,
  } = req.query;
  const filterUser = (author === undefined) ? {} : { nickname: author };
  const filterLabel = (label === undefined) ? {} : { name: label };
  const filterMilestone = (milestone === undefined) ? {} : { title: milestone };
  const filterIsopen = (isopen === undefined) ? {} : { is_open: isopen };
  const filterAssignee = (assignee === undefined) ? {} : { nickname: assignee };
  const filterMention = (mention === undefined) ? {} : { author_id: mention };
  const filterTitle = (title === undefined) ? {} : { title };
  const issues = await Issue.findAll({
    attributes: ['id', 'title', 'description', 'createdAt', 'updatedAt', 'is_open'],
    where: filterTitle,
    include: [
      {
        model: User,
        attributes: ['id', 'nickname', 'profile_url'],
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
});

exports.detail = asyncHandler(async (req, res, next) => {
  const { issueNumber } = req.params;
  const hasIssueNumber = { id: issueNumber };
  const issues = await Issue.findAll({
    attributes: ['id', 'title', 'description', 'is_open', 'createdAt', 'updatedAt'],
    where: hasIssueNumber,
    include: [{
      model: User,
      attributes: ['id', 'nickname', 'profile_url'],
    }, {
      model: Comment,
      attributes: ['id', 'description', 'author_id', 'createdAt'],
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
});

exports.create = asyncHandler(async (req, res, next) => {
  const {
    title, description, assignees, labels, milestone_id,
  } = req.body;
  const { user } = res.locals;

  const newIssues = await Issue.create({
    title, description, author_id: user.id, milestone_id,
  });

  if (assignees.length > 0) {
    const assigneeData = assignees.map((id) => ({ issue_id: newIssues.id, assignee_id: id }));
    await IssueAssignee.bulkCreate(assigneeData);
  }
  if (labels.length > 0) {
    const labelData = labels.map((id) => ({ issue_id: newIssues.id, label_id: id }));
    await IssueLabel.bulkCreate(labelData);
  }

  return res.json({
    success: true,
    content: { id: newIssues.id },
  });
});

exports.update = asyncHandler(async (req, res, next) => {
  const {
    issue_id, title, description, is_open, assignee_id, label_id, milestone_id, mode,
  } = req.body;

  if (title || description || is_open === 0 || is_open === 1) {
    await Issue.update(
      {
        title,
        description,
        is_open,
      },
      {
        where: {
          id: issue_id,
        },
      },
    );
  }

  if (assignee_id) {
    if (mode === 1) {
      await IssueAssignee.create({
        issue_id, assignee_id,
      });
    } else if (mode === 0) {
      await IssueAssignee.destroy({
        where: {
          issue_id, assignee_id,
        },
      });
    }
  }

  if (label_id) {
    if (mode === 1) {
      await IssueLabel.create({
        issue_id, label_id,
      });
    } else if (mode === 0) {
      await IssueLabel.destroy({
        where: {
          issue_id, label_id,
        },
      });
    }
  }

  if (milestone_id) {
    const value = (mode === 1) ? milestone_id : null;
    await Issue.update(
      {
        milestone_id: value,
      },
      {
        where: {
          id: issue_id,
        },
      },
    );
  }

  return res.json({
    success: true,
  });
});
