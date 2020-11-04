const { Label } = require('../../models');

exports.list = async (req, res) => {
  try {
    const labels = await Label.findAll();
    return res.json({
      success: true,
      content: { labels },
    });
  } catch (err) {
    res.status(500).json({ success: false, message: 'DB Error' });
  }
};
