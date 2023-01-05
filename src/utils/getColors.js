import randomChoiceFrom from "./randomChoiceFrom";

function getColors(colorPalette) {
    let colors = [...colorPalette];
    let mixedPalette = [];

    for (let i = 0; i < [...colorPalette].length; i++) {
        let colorIndex = randomChoiceFrom(colors);
        mixedPalette[i] = colors[colorIndex];
        colors.splice(colorIndex, 1);
    }

    return mixedPalette;
}

export default getColors;