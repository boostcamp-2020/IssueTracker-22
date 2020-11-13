const { Comment } = require('../../models');
    
exports.create = async (req, res) => {
  const {
    issue_id, description,
  } = req.body;
  const { user } = res.locals;

  try {
    const newComments = await Comment.create({
      issue_id, description, author_id: user.id,
    });
    return res.json({
      success: true,
      content: { id: newComments.id },
    });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Internel Server Error' });
  }
};
