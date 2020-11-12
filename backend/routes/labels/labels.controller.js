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

exports.create = asyncHandler(async (req, res, next) => {
  const { name, description, color } = req.body;

  const newLabel = await Label.create({
    name, description, color_code: color,
  });

  return res.json({
    success: true,
    content: { id: newLabel.id },
  });
});

exports.update = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { name, description, color } = req.body;

  await Label.update({
    name, description, color_code: color,
  }, { where: { id } });

  return res.json({
    success: true,
  });
});

exports.delete = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  await Label.destroy({ where: { id } });

  return res.json({
    success: true,
  });
});
