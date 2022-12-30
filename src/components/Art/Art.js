import React from 'react';

import Box from './Box';

import './styles.scss'

function Art() {
    const random = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // to break out from the square pattern you can randomize art size
    const artSize = Math.min(window.innerWidth * 0.9, window.innerHeight * 0.9);
    const gridSize = (random(3, 12));
    const boxSize = artSize / gridSize ;

    let boxes = new Array(gridSize).fill(new Array(gridSize));

    // test
    console.log('Grid:' + gridSize);
    console.log(boxes);

    return (
        <div className='art'>
            <svg width={artSize}>
                {boxes.map((element, index) => (
                    <Box key={`box-${index}`} boxSize={boxSize}/>
                ))}
            </svg>
        </div>
    )
}

export default Art;