import React from 'react';
import { getColors } from '../../utils';

function Circle({ props }) {

    const { boxSize, indexY, indexX } = props;
    const [ firstColor, secondColor, thirdColor, fourthColor ] = getColors(props.colorPalette);

    return (
        <g className='circle'>
            <rect
                x={boxSize * indexX}
                y={boxSize * indexY}
                width={boxSize}
                height={boxSize}
                fill={`#${firstColor}`}
                />
            <circle
                cx={(boxSize * indexX) + 0.5 * boxSize}
                cy={(boxSize * indexY) + 0.5 * boxSize}
                r={boxSize/2}
                fill={`#${secondColor}`}
                />
            <circle
                cx={(boxSize * indexX) + 0.5 * boxSize}
                cy={(boxSize * indexY) + 0.5 * boxSize}
                r={0.6 * boxSize/2}
                fill={`#${thirdColor}`}
                />
            <circle
                cx={(boxSize * indexX) + 0.5 * boxSize}
                cy={(boxSize * indexY) + 0.5 * boxSize}
                r={0.2 * boxSize/2}
                fill={`#${fourthColor}`}
                />
        </g>
    );
}

export default Circle;