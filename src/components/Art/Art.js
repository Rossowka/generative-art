import React from 'react';
import { colors } from '../../assets';
import { randomChoiceFrom, randomFromBetween } from '../../utils';

import Box from './Box';

import './styles.scss';

function Art() {
    // to break out from the square pattern you can randomize art size
    const artSize = Math.min(window.innerWidth * 0.9, window.innerHeight * 0.9);
    const gridSize = randomFromBetween(3, 12);
    const boxSize = artSize / gridSize ;

    let boxes = new Array(gridSize).fill(new Array(gridSize).fill(0));

    let colorPalette = colors[randomChoiceFrom(colors)];
    let backgroundColor = colorPalette[randomChoiceFrom(colorPalette)];

    return (
        <div className='art' style={{backgroundColor: `#${backgroundColor}90`}}>
            <svg width={artSize}>
                {boxes.map((array, indexY) => array.map((box, indexX) => (
                    <Box
                        key={`row-${indexY}-box${indexX}`}
                        indexX={indexX}
                        indexY={indexY}
                        boxSize={boxSize}
                        colorPalette={colorPalette}
                        />
                )))}
            </svg>
        </div>
    )
}

export default Art;