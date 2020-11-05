const { Label } = require('../../models');
const asyncHandler = require('../../lib/asyncHandler');

exports.list = asyncHandler(async (req, res, next) => {
  const labels = await Label.findAll();

  return res.json({
    success: true,
    content: { labels },
  });
});
