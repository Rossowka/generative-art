import React from 'react';
import { randomChoiceFrom } from '../../utils';

import './styles.scss';

function Box({ boxSize, indexY, indexX, colorPalette }) {
    let backgroundColor = colorPalette[randomChoiceFrom(colorPalette)];

    return (
        <g className='box' fill={`#${backgroundColor}`}>
            <rect x={boxSize * indexX} y={boxSize * indexY} width={boxSize} height={boxSize}/>
        </g>
    )
}

export default Box;