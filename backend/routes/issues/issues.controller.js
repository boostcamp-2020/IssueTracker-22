const models = require('../../models');

exports.list = async (req, res, next) => {
  const { query } = req.query;
  
  try {
    const issues = await models.Issue.findAll({
      where: query
    });
    res.json({ success: true, content: { issues } });
  } catch (err) {
    res.status(400).json({ success: false, message: "get issue-list fail" });
  }
};