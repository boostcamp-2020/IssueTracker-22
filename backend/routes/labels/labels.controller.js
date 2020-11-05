const { Label } = require('../../models');

exports.list = async (req, res) => {
  try {
    const labels = await Label.findAll({
      attributes: ['id', 'name', 'description', 'color_code'],
    });
    return res.json({
      success: true,
      content: { labels },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: 'DB Error' });
  }
};
