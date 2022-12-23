import React from 'react';

import Box from './Box';

import './styles.scss'

function Art() {
    const artSize = Math.min(window.innerWidth * 0.9, window.innerHeight * 0.9);
    const random = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const boxes = (random(3, 12));
    console.log(boxes);

    return (
        <div className='art'>
            <svg width={artSize}>
                <Box boxes={boxes} artSize={artSize}/>
            </svg>
        </div>
    )
}

export default Art;