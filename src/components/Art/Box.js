import React from 'react';

function Box({ boxes, artSize }) {
    let boxSize = artSize / boxes ;

    return (
        <rect x='0' y='0' width={boxSize} height={boxSize}/>
    )
}

export default Box;