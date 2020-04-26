const Color = require('color')
const colorable = require('colorable')

module.exports = (color, palette) => {
  const colorHex = Color(color)
    .hex()
    .toUpperCase() // Colorable capitalizes all returned values

  const fullPalette = palette.includes(colorHex)
    ? palette
    : palette.concat([colorHex])
  const result = colorable(fullPalette, { threshold: 4.5 })

  const { combinations = [] } =
    result.find(color => colorHex === color.hex) || {}

  return combinations.map(c => {
    const color = Color(c.hex)

    return {
      hex: color.hex(),
      hsl: color.hsl().string(),
      rgb: color.rgb().string()
    }
  })
}
