import randomChoiceFrom from "./randomChoiceFrom";

function getTwoColors(colorPalette) {
    let colors = [...colorPalette]
    const colorIndex = randomChoiceFrom(colors);
    const backgroundColor = colors[colorIndex];
    colors.splice(colorIndex, 1);
    const foregroundColor = colors[randomChoiceFrom(colors)];

    return {
        foregroundColor, backgroundColor
    };
}

export default getTwoColors;