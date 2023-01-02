import React from 'react';
import './styles.scss';

function Box({ boxSize, indexY, indexX }) {

    return (
        <g className='box'>
            <rect x={boxSize * indexX} y={boxSize * indexY} width={boxSize} height={boxSize}/>
        </g>
    )
}

export default Box;