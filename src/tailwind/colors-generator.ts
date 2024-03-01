export {};
const { colors: baseColors } = require('./colors');
function generateTailwindColorsRecursive(
  colors: any,
  colorsPrev: any,
  prefix = 'color',
  lastPrefix = 'color'
) {
  let result = '';
  if (typeof colors === 'string') {
    result += `var(--${prefix})`;
    colorsPrev[lastPrefix] = result;
  } else {
    Object.keys(colors).forEach((key) => {
      result = generateTailwindColorsRecursive(
        colors[key],
        colors,
        `${prefix}-${key}`,
        key
      );
    });
  }
  return result;
}

function generateTailwindColors() {
  const deepClonedColors = JSON.parse(JSON.stringify(baseColors));
  generateTailwindColorsRecursive(deepClonedColors, deepClonedColors);
  return deepClonedColors;
}

generateTailwindColors();

module.exports = { generateTailwindColors };
