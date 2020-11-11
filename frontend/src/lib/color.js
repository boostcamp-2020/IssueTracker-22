function hexToRgb(hexType) {
  const hex = hexType.replace('#', '');
  const value = hex.match(/[a-f\d]{2}/gi);

  const r = parseInt(value[0], 16);
  const g = parseInt(value[1], 16);
  const b = parseInt(value[2], 16);

  return [r, g, b];
}

function contrastColor(hex) {
  let d = '0'; // bright colors - black font
  const [r, g, b] = hexToRgb(hex);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  if (luminance <= 0.5) d = 'f'; // dark colors - white font
  return `#${d.repeat(6)}`;
}

export { contrastColor };
