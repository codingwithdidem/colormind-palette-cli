const getPalette = require('./get-palette')
const settings = require('./helpers/default-settings')
const hexToRgb = require('./helpers/hexToRgb')

// Generates a complet random palette
const random = async () => {
    const palette = await getPalette(settings);
    return palette;
}

const generatePalette = async (model = "default", colors) => {
    model = (['ui', 'default', 'game_of_thrones', 'lego_movie', 'maple_story', 'communist'].includes(model.toLowerCase())) ? model : 'default';

    let colorsRGB = colors.map(color => hexToRgb[color])

    while(colorsRGB.length < 5 ) {
        colorsRGB.push("N")
    }

    const settings = {
        model,
        input: colorsRGB
    }

    const palette = await settings(args);

    return palette;

}



module.exports = {
    random,
    generatePalette
}