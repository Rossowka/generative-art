import React from 'react';
import './styles.scss';

function Box({ boxes, artSize }) {
    let boxSize = artSize / boxes ;

    return (
        <rect x='0' y='0' width={boxSize} height={boxSize} className='box'/>
    )
}

export default Box;