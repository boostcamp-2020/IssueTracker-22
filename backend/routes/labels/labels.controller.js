const { Label } = require('../../models');
const asyncHandler = require('../../lib/asyncHandler');

exports.list = asyncHandler(async (req, res, next) => {
  const labels = await Label.findAll({
    attributes: ['id', 'name', 'description', 'color_code'],
  });
  return res.json({
    success: true,
    content: { labels },
  });
});
